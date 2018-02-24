import { subscribeMixin } from './tools/mixin';
import { OrbitControls } from './tools/OrbitControls';
import { Loader } from './tools/Loader';
import { TransformControls } from './tools/TransformControls';
import { Player } from './Player';
import { RenderPass } from './RenderPass';
import { TData } from './TData';
//import { ShaderPass, ClearPass, RenderPass, EffectComposer,CopyShader,DotScreenShader } from './EffectComposer.js';

const VERTEX_HEADER_THREE = `
precision highp float;
//Three.js Built-in uniforms and attributes
//https://threejs.org/docs/#api/renderers/webgl/WebGLProgram
// = object.matrixWorld
uniform mat4 modelMatrix;
// = camera.matrixWorldInverse * object.matrixWorld
uniform mat4 modelViewMatrix;
// = camera.projectionMatrix
uniform mat4 projectionMatrix;
// = camera.matrixWorldInverse
uniform mat4 viewMatrix;
// = inverse transpose of modelViewMatrix
uniform mat3 normalMatrix;
// = camera position in world space
uniform vec3 cameraPosition;

// default vertex attributes provided by Geometry and BufferGeometry
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec2 uv2;
`;

const FRAG_HEADER_THREE = `
precision highp float;
//Three.js Built-in uniforms and attributes
//https://threejs.org/docs/#api/renderers/webgl/WebGLProgram
// = object.matrixWorld
uniform mat4 modelMatrix;
// = camera.matrixWorldInverse * object.matrixWorld
uniform mat4 modelViewMatrix;
// = camera.projectionMatrix
uniform mat4 projectionMatrix;
// = camera.matrixWorldInverse
uniform mat4 viewMatrix;
// = inverse transpose of modelViewMatrix
uniform mat3 normalMatrix;
// = camera position in world space
uniform vec3 cameraPosition;
`;

const EMPTY_VERTEX_SHADER = `
varying vec3 fNormal;
varying vec3 fPosition;
varying vec2 fUV;

void main()
{
    fNormal = normal;
    vec4 wpos = modelMatrix * vec4(position, 1.0);
    fPosition = wpos.xyz;
    fUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const EMPTY_FRAG_SHADER = `
varying vec3 fPosition;
varying vec3 fNormal;
varying vec2 fUV;

vec3 rim(vec3 color, float start, float end, float coef)
{
  vec3 normal = normalize(fNormal);
  vec3 eye = normalize(cameraPosition- fPosition);
  float rim = smoothstep(start, end, 1.0 - dot(normal, eye));
  return clamp(rim, 0.0, 1.0) * coef * color;
}


void main()
{
    vec3 rimColor = rim(vec3(0.764,1.000,0.857),0.360,1.144,1.816);
    vec3 baseColor = fNormal * sin(iTime * 3.0);
    gl_FragColor = vec4(rimColor + baseColor,1.0);
}
`;

const VIGNETTE_VERTEX = `
varying vec2 fUV;
void main() {
    fUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const VIGNETTE_FRAG = `
varying vec2 fUV;
//Fill the iPass0 texture with Vignette shader.
void main() {
    float offset = 1.0;
    float darkness = 1.0;
    vec4 backColor = vec4(0.203,0.293,0.485,1.000);
    vec2 uv = ( fUV - vec2(0.5,0.5) ) * vec2( offset );
    gl_FragColor = vec4( mix( backColor.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), backColor.a );
}
`;

const COMPOSE_FRAG = `
varying vec2 fUV;
//iPass0 is rendered by iPass0(the Vignette shader)
//iSceneTexture is rendered by the Object shader
void main() {
    vec4 object = texture2D( iSceneTexture, fUV );
    vec4 background = texture2D( iPass0, fUV );
    gl_FragColor = mix(background, object, object.a);
}
`;


const DEFAULT_PASS_VERTEX = `
varying vec2 fUV;
void main() {
    fUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const DEFAULT_PASS_FRAG = `
varying vec2 fUV;
void main() {
    vec4 texel = texture2D( iSceneTexture, fUV );
    gl_FragColor = texel;
}
`;


const THREE_PACKING = "vec3 packNormalToRGB( const in vec3 normal ) {return normalize( normal ) * 0.5 + 0.5;\r\n}\r\n\r\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\r\n\treturn 2.0 * rgb.xyz - 1.0;\r\n}\r\n\r\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\r\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\r\n\r\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\r\n\r\nconst float ShiftRight8 = 1. / 256.;\r\n\r\nvec4 packDepthToRGBA( const in float v ) {\r\n\tvec4 r = vec4( fract( v * PackFactors ), v );\r\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\r\n\treturn r * PackUpscale;\r\n}\r\n\r\nfloat unpackRGBAToDepth( const in vec4 v ) {\r\n\treturn dot( v, UnpackFactors );\r\n}\r\n\r\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\r\n\r\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\r\n\treturn ( viewZ + near ) / ( near - far );\r\n}\r\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\r\n\treturn linearClipZ * ( near - far ) - near;\r\n}\r\n\r\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\r\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\r\n}\r\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\r\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\r\n}\r\n";

export default class ThreeCanvas {


    getInputHeader() {
        var header = '//header-begin\r\n';
        var params = 'uniform float iTime;\r\nuniform vec2 iResolution;\r\nuniform sampler2D iDepthTexture;\r\nuniform sampler2D iSceneTexture;\r\nuniform float iCameraNear;\r\nuniform float iCameraFar;\r\n';
        for (var i = 0; i < this.data.textures.length; i++){
            params += 'uniform sampler2D iTexture' + i + ';\r\n';
        }
        for (var i = 0; i < this.data.renderPasses.length; i++){
            params += 'uniform sampler2D iPass' + i + ';\r\n';
        }

        if (this.data.showScene && this.data.useLight){
            params += 'uniform vec3 iLightDirection;\r\n';
        }

        var end = '//header-end\r\n';

        var ret = header + params + end;

        //console.log(ret);
        return ret;
    }
    
    static get EMPTY_VERTEX_SHADER() {
        return EMPTY_VERTEX_SHADER;
    }
    
    static get EMPTY_FRAG_SHADER() {
        return EMPTY_FRAG_SHADER;
    }

    static get VERTEX_HEADER_THREE() {
        return VERTEX_HEADER_THREE;
    }
    
    static get FRAG_HEADER_THREE() {
        return FRAG_HEADER_THREE;
    }

    static get THREE_PACKING() {
        return THREE_PACKING;
    }
    
    getInputUniforms(){
        if (this.input_uniforms == null || this.input_uniforms == undefined){
            this.input_uniforms = {
                iTime: {
                    value: 0.0
                },
                iResolution: {
                    value: new THREE.Vector2()
                },
                iSceneTexture:{
                    value: null
                },
                iDepthTexture:{
                    value: null
                },
                iCameraNear:{
                    value:0.0
                },
                iCameraFar:{
                    value:0.0
                },
                iLightDirection:{
                    value: new THREE.Vector3()
                }
            };
        }
        

        for (var i = 0; i < this.data.textures.length; i++){
            var property = 'iTexture' + i;
            this.input_uniforms[property] = {value:null};
        }

        for (var i = 0; i < this.data.renderPasses.length; i++){
            var property = 'iPass' + i;
            this.input_uniforms[property] = {value:null};
        }

        return this.input_uniforms;
    }
    
    //todo: use regexp
    static removeShaderHeader(shader){
        //var regex = /^\/\/header-begin.*\/\/header-end/gm;
        //var regex = /^header-begin(.*)/g;
        var begin = shader.indexOf("//header-begin");
        var end = shader.indexOf("//header-end");
        var substr = shader.substr(begin, end - begin+13);
		shader = shader.replace(substr,"");
		if (shader.startsWith("\n")){
			shader = shader.substr(1,shader.length - 1);
		}
		if (shader.startsWith("\n")){
			shader = shader.substr(1,shader.length - 1);
		}
		return shader;
    }

    constructor(canvas) {
        subscribeMixin(this);
        this.player = undefined;
        this.inited = false;
        this.frame = 0;
        this.rendererInited = false;
        this.completedCallback = undefined;
        this.transformControls = undefined;
        this.canvas = canvas;
        this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			canvas: this.canvas
        });
        this.renderer.autoClear = false;
        this.renderer.shadowMapEnabled = true;
		this.renderer.setClearColor(0x000000,0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.camera = new THREE.PerspectiveCamera( 75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000 );
        this.camera.position.z = 2;
        this.camera.position.y = 2;
        this.camera.lookAt ( 0, 0, 0 );
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableKeys = false;

        //setupDepthRenderer
        this.sceneTarget = new THREE.WebGLRenderTarget( this.canvas.clientWidth, this.canvas.clientHeight );
        this.sceneTarget.texture.format = THREE.RGBAFormat;
        this.sceneTarget.texture.minFilter = THREE.NearestFilter;
        this.sceneTarget.texture.magFilter = THREE.NearestFilter;
        this.sceneTarget.texture.generateMipmaps = false;
        this.sceneTarget.stencilBuffer = false;
        this.sceneTarget.depthBuffer = true;


        this.depthTarget = new THREE.WebGLRenderTarget( this.canvas.clientWidth, this.canvas.clientHeight );
        this.depthTarget.texture.format = THREE.RGBAFormat;
        this.depthTarget.texture.minFilter = THREE.NearestFilter;
        this.depthTarget.texture.magFilter = THREE.NearestFilter;
        this.depthTarget.texture.generateMipmaps = false;
        this.depthTarget.stencilBuffer = false;
        this.depthTarget.depthBuffer = true;
        this.depthTarget.depthTexture = new THREE.DepthTexture();
        this.depthTarget.depthTexture.type = THREE.UnsignedShortType;
        return this;
    }

    resetCamera(){
        this.camera.position.z = 2;
        this.camera.position.y = 2;
        this.camera.lookAt ( 0, 0, 0 );
        this.controls.target0 = new THREE.Vector3();
        this.controls.position0 = this.camera.position;
        this.controls.zoom0 = this.camera.zoom;
        this.controls.reset();
    }

    newPass(index){
        return new RenderPass(this,this.renderer,1,true,DEFAULT_PASS_FRAG,DEFAULT_PASS_VERTEX,index);
    }

    toJSON(){
		return {
            data: this.data.toJSON(),
            player: this.player.toJSON(),
            cameraPos: this.camera.position,
            cameraRot: this.camera.rotation.toVector3(),
            cameraController: this.controls.toJSON(),
		};		
    }
    
    updateData(){
        this.player.setObject(this.data.objectType);
        this.player.curMaterial().blending = this.data.blending;
        this.player.curMaterial().side = this.data.side;
        this.player.curMaterial().flatShading = this.data.flatShading;
        this.player.curMaterial().transparent = this.data.transparent;
        this.player.curMaterial().wireframe = this.data.wireframe;
        this.player.curMaterial().depthWrite = this.data.depthWrite;
        this.player.curMaterial().depthTest = this.data.depthTest;
        this.player.currentObj().scale.set(this.data.objScale.x, this.data.objScale.y, this.data.objScale.z);
        this.player.currentObj().position.set( this.data.objPos.x, this.data.objPos.y, this.data.objPos.z );
        this.player.currentObj().rotation.set( this.data.objRot.x, this.data.objRot.y, this.data.objRot.z );
    }

    loadFromJSON(json, completeCallback){
        this.data = new TData(this);
        this.data.loadFromJSON(json.data);

        this.player = new Player(this);
        this.player.load(json.player,this.data);
        this.frame = 0;
        this.rendererInited = false;
        this.completedCallback = completeCallback;
        for (var i = 0; i < this.data.passDatas.length; i++){
            var pdata = this.data.passDatas[i];
            this.data.renderPasses.push(new RenderPass(this,this.renderer
                ,pdata.downRes,pdata.renderToScreen
                ,ThreeCanvas.removeShaderHeader(pdata.frag)
                ,ThreeCanvas.removeShaderHeader(pdata.vertex),i,pdata.passName));
        }


        this.camera.position.set(json.cameraPos.x,json.cameraPos.y,json.cameraPos.z);
        this.camera.rotation.set(json.cameraRot.x,json.cameraRot.y,json.cameraRot.z);
        this.controls.fromJSON(json.cameraController);
        this.controls.reset();

        this.updateData();
        this.inited = true;
        this.play();
    }

    new(completeCallback){
        this.frame = 0;
        this.rendererInited = false;
        this.player = new Player(this);
        this.player.newScene();
        this.completedCallback = completeCallback;
        this.data = new TData(this);

        //background
        this.data.renderPasses.push(new RenderPass(this,this.renderer,1,true,VIGNETTE_FRAG,DEFAULT_PASS_VERTEX,0));
        //compose
        this.data.renderPasses.push(new RenderPass(this,this.renderer,1,true,COMPOSE_FRAG,DEFAULT_PASS_VERTEX,1));

        this.data.renderPasses[0].passName = 'Background';
        this.data.renderPasses[1].passName = 'Compose';
        this.data.renderPasses[0].renderToScreen = false;


        this.updateData();
        this.inited = true;
        this.play();
    }

    play() {
		let sandbox = this;
		this.prevTime = performance.now();
		function RenderLoop() {
            if (sandbox.inited){

                //should not reset uniforms in every frame.
                //sandbox.refreshUniforms(); 

                sandbox.player.updateUniforms();
                //render depth buffer
                if (sandbox.player.envScene != null){
                    sandbox.renderer.render( sandbox.player.envScene, sandbox.camera, sandbox.depthTarget, true);
                    sandbox.renderer.render( sandbox.player.scene, sandbox.camera, sandbox.depthTarget);
                }
                else{
                    sandbox.renderer.render( sandbox.player.scene, sandbox.camera, sandbox.depthTarget, true);
                }

                //assign depth
                sandbox.updateUniforms();
                //render the main scene.
                if (sandbox.data.renderPasses.length == 0){
                    if (sandbox.player.envScene != null){
                        sandbox.renderer.render( sandbox.player.envScene, sandbox.camera,null,true);
                        sandbox.renderer.render( sandbox.player.scene, sandbox.camera,null,false);
                    }
                    else{
                        sandbox.renderer.render( sandbox.player.scene, sandbox.camera,null,true);
                    }
                }
                else{
                    if (sandbox.player.envScene != null){
                        sandbox.renderer.render( sandbox.player.envScene, sandbox.camera, sandbox.sceneTarget,true);
                        sandbox.renderer.render( sandbox.player.scene, sandbox.camera, sandbox.sceneTarget);
                    }
                    else{
                        sandbox.renderer.render( sandbox.player.scene, sandbox.camera, sandbox.sceneTarget,true);
                    }
                }

                for (var i = 0; i < sandbox.data.renderPasses.length; i++){
                    sandbox.data.renderPasses[i].material.uniforms.iSceneTexture.value = sandbox.sceneTarget;
                    if (i > 0){
                        var property = 'iPass' + (i - 1);
                        sandbox.data.renderPasses[i].material.uniforms[property].value = sandbox.data.renderPasses[i - 1].renderTarget;
                    }
                    sandbox.data.renderPasses[i].render();
                }

                sandbox.frame++;
                if (sandbox.frame > 1 && !sandbox.rendererInited){
                    if (sandbox.completedCallback != null && sandbox.completedCallback != undefined){
                        sandbox.completedCallback();
                    }
                    //sandbox.refreshUniforms();
                    sandbox.rendererInited = true;
                }

                if (sandbox.data.animateScale){
                    var curTime = performance.now() / 1000.0;
                    var factor = Math.sin(curTime * 1.0)*0.5 + 0.6;
                    sandbox.player.currentObj().scale.set(sandbox.data.objScale.x * factor,sandbox.data.objScale.y * factor,sandbox.data.objScale.z * factor);
                }
            }
            sandbox.controls.update();
			window.requestAnimationFrame(RenderLoop);
        }
		RenderLoop();
    }
    


	createGLShader(canvas, source, type){
        let gl = this.getContext();
        let shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            let lastError = gl.getShaderInfoLog(shader);
            console.error('*** Error compiling shader ' + shader + ':' + lastError);
            let headerLine = 0;

            if (type == this.getContext().VERTEX_SHADER){
                canvas.trigger('vertex_error', { shader: shader, source: source, type: type, error: lastError, headerLine: this.vertexHeaderLine() });
            }
            else{
                canvas.trigger('frag_error', { shader: shader, source: source, type: type, error: lastError, headerLine: this.fragHeaderLine() });
            }
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    
	getContext(){
		return this.renderer.getContext();
	}

    resize(w,h){
        this.canvas.style.width = w +'px';
        this.canvas.style.height = h +'px';
        
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        var dpr = this.renderer.getPixelRatio();


        for (var i = 0; i < this.data.renderPasses.length; i++){
            this.data.renderPasses[i].setSize(this.canvas.clientWidth * dpr, this.canvas.clientHeight * dpr)
        }

        
		this.sceneTarget.setSize( this.canvas.clientWidth * dpr, this.canvas.clientHeight * dpr );
    }

    curVertexShader(){
        if (this.data.editMode == 0){
            return this.player.curVertexShader();
        }
        else{
            return ThreeCanvas.removeShaderHeader(this.data.renderPasses[this.data.editMode - 1].material.vertexShader);
        }
    }

    curFragSahder(){
        if (this.data.editMode == 0){
            return this.player.curFragSahder();
        }
        else{
            return ThreeCanvas.removeShaderHeader(this.data.renderPasses[this.data.editMode - 1].material.fragmentShader);
        }
    }

    vertexHeaderLine(){
        return (this.getInputHeader() + ThreeCanvas.VERTEX_HEADER_THREE).split(/\r\n|\r|\n/).length;
    }

    fragHeaderLine(){
        return (this.getInputHeader() + ThreeCanvas.FRAG_HEADER_THREE).split(/\r\n|\r|\n/).length;
    }


    refreshUniforms(){
        this.player.curMaterial().uniforms = this.getInputUniforms();
        for (var i = 0; i < this.data.renderPasses.length; i++){
            this.data.renderPasses[i].refreshUniforms();
        }
    }

    updateRenderPassUniforms(){
        let scope = this;
        for (var i = 0; i < this.data.renderPasses.length; i++){

            this.data.renderPasses[i].material.uniforms.iTime.value = performance.now() / 1000.0;
            this.data.renderPasses[i].material.uniforms.iResolution.value.x = scope.canvas.clientWidth;
            this.data.renderPasses[i].material.uniforms.iResolution.value.y = scope.canvas.clientHeight;
            this.data.renderPasses[i].material.uniforms.iCameraNear.value = scope.camera.near;
            this.data.renderPasses[i].material.uniforms.iCameraFar.value = scope.camera.far;
            if (scope.player.dirLight != null){
                this.data.renderPasses[i].material.uniforms.iLightDirection.value = -scope.player.dirLight.position;
            }
            //set iSceneTexture later.
            //this.data.renderPasses[i].material.uniforms.iSceneTexture.value = scope.sceneTarget;

            this.data.renderPasses[i].material.uniforms.iDepthTexture.value = scope.depthTarget.depthTexture;

            for (var k = 0; k < scope.data.textures.length; k++){
                var property = 'iTexture' + k;
                scope.data.renderPasses[i].material.uniforms[property].value = scope.data.textures[k];
            }
        }
    }

    updateUniforms(){
        this.player.updateUniforms();
        this.updateRenderPassUniforms();
    }

    updateCurMaterial(fragString, vertString){
        if(this.data.editMode == 0){
            this.player.updateCurMaterial(this.getInputHeader() + fragString, this.getInputHeader() + vertString);
        }
        else{
            for (var i = 0; i < this.data.renderPasses.length; i++){
                if ((this.data.editMode - 1) == i){
                    this.data.renderPasses[i].updateMaterial(this.getInputHeader() + vertString,this.getInputHeader() + fragString);
                }
            }
        }
    }

    checkLoadEditorShader(fragString, vertString){
        let vertexShader = null;
        let fragmentShader = null;

        vertexShader = this.createGLShader(this, ThreeCanvas.VERTEX_HEADER_THREE +this.getInputHeader() + vertString, this.getContext().VERTEX_SHADER);
        fragmentShader = this.createGLShader(this, ThreeCanvas.FRAG_HEADER_THREE + this.getInputHeader() + fragString, this.getContext().FRAGMENT_SHADER);

        if (!fragmentShader || !vertexShader) {
            this.isValid = false;
        }
        else {
            this.isValid = true;
            this.updateCurMaterial(fragString, vertString);
        }

        let gl = this.getContext();
        if (fragmentShader){
            gl.deleteShader(fragmentShader);
        }
        if (vertexShader){
            gl.deleteShader(vertexShader);
        }
    }
}
