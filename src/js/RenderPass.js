import ThreeCanvas from './ThreeCanvas';




export class RenderPass {
	constructor(canvas, renderer, downRes, renderToScreen, frag, vertex, index, passName) {
		this.threeCanvas = canvas;
		this.width = canvas.canvas.clientWidth;
		this.height = canvas.canvas.clientHeight;

		this.index = index;

		if (passName == null || passName == undefined){
			this.passName = 'Name';
		}
		else{
			this.passName = passName;
		}

		this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
		this.scene = new THREE.Scene();
		this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
		this.quad.frustumCulled = false; // Avoid getting clipped
		this.scene.add( this.quad );

		//this.uniforms = this.threeCanvas.getInputUniforms();
		this.material = new THREE.ShaderMaterial( {
			uniforms: null,
			vertexShader: this.threeCanvas.getInputHeader() + vertex,
			fragmentShader: this.threeCanvas.getInputHeader() + frag
		} );

		this.refreshUniforms();

		this.renderer = renderer;
		this.renderToScreen = renderToScreen;
		this.downRes = downRes;
		this.setTargetTexture(downRes);
		this.updateMaterial(this.threeCanvas.getInputHeader() + vertex, 
		this.threeCanvas.getInputHeader() + frag);
	}

	setSize(width, height) {
		this.width = width;
		this.height = height;
		this.renderTarget.setSize( width * this.downRes, height * this.downRes );
	}

	setRes(res){
		this.downRes = res;
		this.setSize(this.width, this.height);
	}

	toJSON(){
		return {
			downRes: this.downRes,
			renderToScreen: this.renderToScreen,
			frag: this.material.fragmentShader,
			vertex: this.material.vertexShader,
			passName: this.passName,
		}
	}

	render(){
		this.quad.material = this.material;
		if ( this.renderToScreen ) {
			this.renderer.render( this.scene, this.camera);
		} else {
			this.renderer.render( this.scene, this.camera, this.renderTarget, true);
		}
	}

	refreshUniforms(){
		this.uniforms = this.threeCanvas.getInputUniforms();
		this.material.uniforms = this.uniforms;
	}

	updateMaterial(vertexShader, fragmentShader){
		this.refreshUniforms();
		this.material.vertexShader = vertexShader;
		this.material.fragmentShader = fragmentShader;
		this.material.needsUpdate = true;
	}

	setTargetTexture(downRes){
		var parameters = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBAFormat,
            stencilBuffer: false,
		};
		var size = this.renderer.getDrawingBufferSize();
		this.renderTarget = new THREE.WebGLRenderTarget( size.width * downRes, size.height * downRes, parameters );
		//renderTarget.texture.name = 'EffectComposer.rt1';
	}


}
