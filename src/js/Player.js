import { OrbitControls } from './tools/OrbitControls';
import { TransformControls } from './tools/TransformControls';
import ThreeCanvas from './ThreeCanvas';


export class Player {
	constructor(canvas) {
		this.loader = new THREE.ObjectLoader();
		this.scene = null;
		this.envScene = null;
		this.threeCanvas = canvas;
		this.prevTime = 0;
		this.curObj = null;
		this.dirLight = null;
	}

	currentObj(){
		if (this.curObj != null){
			return this.curObj;
		}

		let scope = this;
		this.scene.traverse (function (object)
		{
			if (object instanceof THREE.Mesh)
			{
				scope.curObj = object;
				return scope.curObj;
			}
		});

		//should not happen.
		//this.setObject(0);

		return this.curObj;
	}

	curMaterial(){
		if (this.curMat != null){
			return this.curMat;
		}
		this.curMat = this.createShaderMaterial(this.threeCanvas.getInputHeader() + ThreeCanvas.EMPTY_FRAG_SHADER, this.threeCanvas.getInputHeader() + ThreeCanvas.EMPTY_VERTEX_SHADER);
		return this.curMat;
	}


    curVertexShader(){
        return ThreeCanvas.removeShaderHeader(this.currentObj().material.vertexShader);
    }

    curFragSahder(){
        return ThreeCanvas.removeShaderHeader(this.currentObj().material.fragmentShader);
    }


	updateCurMaterial(frag, vertex){
		this.curMaterial().vertexShader = vertex;
		this.curMaterial().fragmentShader = frag;
		this.curMaterial().needsUpdate = true;
	}

	createShaderMaterial(frag,vertex){
		  return new THREE.ShaderMaterial({
			uniforms: this.threeCanvas.getInputUniforms(),
			vertexShader: vertex,
			fragmentShader: frag
		});
	}

	clear() {
		if (this.scene != null){
			while(this.scene.children.length > 0){ 
				this.scene.remove(this.scene.children[0]);
			}
		}

		if (this.envScene != null){
			while(this.envScene.children.length > 0){ 
				this.envScene.remove(this.envScene.children[0]); 
			}
		}

		this.curMat = null;
		this.curObj = null;
	}

	createSceneObject(type){
		var geometry = null;
		var position = null;
		var plane = -1.0;
		var planeR = 14.0;
		if (type == 0){
			position = new THREE.Vector3( 0, plane, 0 );
			geometry = new THREE.BoxGeometry(planeR,0.1,planeR);
		}
		else if (type == 1){
			var height = THREE.Math.randFloat(0.8,8);
			position = new THREE.Vector3( THREE.Math.randFloat(-planeR*0.5,planeR*0.5), height / 2.0 + plane, THREE.Math.randFloat(-planeR*0.5,planeR*0.5) );
			var width = THREE.Math.randFloat(0.8,1.6)
			geometry = new THREE.BoxGeometry( width, height, width );
		}

		var rcolor = new THREE.Color( 0xffffff );
		rcolor.setHex( THREE.Math.randFloat(0.5,1.0) * 0xffffff );
		if (type == 0){
			rcolor.setHex( 0x888888 );
		}
		var material = new THREE.MeshPhongMaterial( { color: rcolor } );
		var object = new THREE.Mesh( geometry, material );
		object.castShadow = true;
		object.receiveShadow = true;
		object.position.set(position.x,position.y,position.z);
		this.envScene.add( object );
	}

	useLight(flag){
		if (this.envScene == null){
			return;
		}

		var lightObj = this.envScene.getObjectByName("dirLight");
		this.envScene.remove( lightObj );
		if (flag){
			this.dirLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
			this.dirLight.position.set( 10, 10, 10 );
			this.dirLight.target.position.set( 0, 0, 0 );
			//this.dirLight.shadowCameraVisible = true;
			this.dirLight.castShadow = true;
			this.dirLight.name = "dirLight";
			this.envScene.add( this.dirLight );
		}
	}

	createEnvScene(){
		if (this.envScene != null){
			while(this.envScene.children.length > 0){ 
				this.envScene.remove(this.envScene.children[0]); 
			}
		}
		
		this.envScene = new THREE.Scene();
		this.createSceneObject(0);
		for (var i = 0; i < 14; i++){
			this.createSceneObject(1);
		}

		var light = new THREE.AmbientLight( 0x404040 ); // soft white light
		this.envScene.add( light );
	}

	clearEnvScene(){
		this.envScene = null;
		this.dirLight = null;
	}
	

	setObject(type){
		//clear last
		for ( var i = this.scene.children.length - 1; i >= 0 ; i -- ) {
			var obj = this.scene.children[ i ];
			if (obj instanceof THREE.Mesh)
			{
				this.scene.remove(obj);
			}
		}

		var geometry = null;
		if (type == 0){
			geometry = new THREE.SphereGeometry( 1, 50, 50 );
		}
		else if (type == 1){
			geometry = new THREE.BoxGeometry( 1, 1, 1 );
		}
		else if (type == 2){
			geometry = new THREE.TorusKnotGeometry( 1, 0.4, 64, 8 );
		}
		else if (type == 3){
			geometry = new THREE.PlaneGeometry(3,3,40,40);
		}
		else if (type == 4){
			geometry = new THREE.CylinderGeometry(1,1,3,50);
		}
		else if (type == 5){
			geometry = new THREE.IcosahedronGeometry();
		}
		else if(type == 6){
			geometry = new THREE.TorusGeometry(1,0.4,16,100);
		}

		this.curObj = new THREE.Mesh( geometry, this.curMaterial() );
		this.curObj.name = "MeshObj";
		this.curObj.position.set(0, 0, 0);

		let scope = this;
		// this.curObj.onBeforeRender = function( renderer, scene, camera, geometry, material, group ) {
		// 	material.uniforms.iTime.value = performance.now() / 1000.0; 
		// };
		
		this.scene.add(this.curObj);
	}

	newScene(){
		this.clear();
		this.scene = new THREE.Scene();
	}

	load(json, data) {
		this.clear();
		this.scene = this.loader.parse(json.scene);
		if (json.envScene != null){
			this.envScene = this.loader.parse(json.envScene);
			this.dirLight = this.envScene.getObjectByName( "dirLight" );
		}
		this.curMat = this.curMaterial();
		this.updateCurMaterial(json.frag, json.vert);
		this.curMat.needsUpdate = true;
		
		this.useLight(data.useLight);
	}


	toJSON(){
		let scope = this;
		this.scene.traverse (function (object)
		{
			if (object instanceof THREE.Mesh)
			{
				if (object.material instanceof THREE.ShaderMaterial){
					for (var i = 0; i < scope.threeCanvas.data.textures.length; i++){
						var property = 'iTexture' + i;
						object.material.uniforms[property].value = null;
					}
					object.material.uniforms.iDepthTexture.value = null;
				}
			}
		});

		return {
			metadata: {},
			scene: this.scene.toJSON(),
			envScene: this.envScene != null ? this.envScene.toJSON() : null,
			frag: this.curMaterial().fragmentShader,
			vert: this.curMaterial().vertexShader,
		};
	}

	updateUniforms(){
		let scope = this;

		var curTime = performance.now() / 1000.0;
		if (scope.dirLight != null){
			this.dirLight.position.set( 10 * Math.sin(curTime), 10, 10 * Math.cos(curTime) );
			this.dirLight.target.position.set( 0, 0, 0 );

			//ie bug?
			if (scope.dirLight.position.x < 9999){
				scope.currentObj().material.uniforms.iLightDirection.value = -this.dirLight.position;
			}
		}

		// this.curMaterial().uniforms.iTime.value = curTime;
		// this.curMaterial().uniforms.iResolution.value.x = scope.threeCanvas.canvas.clientWidth;
		// this.curMaterial().uniforms.iResolution.value.y = scope.threeCanvas.canvas.clientHeight;
		// this.curMaterial().uniforms.iCameraNear.value = scope.threeCanvas.camera.near;
		// this.curMaterial().uniforms.iCameraFar.value = scope.threeCanvas.camera.far;
		// this.curMaterial().uniforms.iDepthTexture.value = scope.threeCanvas.depthTarget.depthTexture;

		scope.currentObj().material.uniforms.iTime.value = curTime;
		scope.currentObj().material.uniforms.iResolution.value.x = scope.threeCanvas.canvas.clientWidth;
		scope.currentObj().material.uniforms.iResolution.value.y = scope.threeCanvas.canvas.clientHeight;
		scope.currentObj().material.uniforms.iCameraNear.value = scope.threeCanvas.camera.near;
		scope.currentObj().material.uniforms.iCameraFar.value = scope.threeCanvas.camera.far;
		scope.currentObj().material.uniforms.iDepthTexture.value = scope.threeCanvas.depthTarget.depthTexture;

		for (var i = 0; i < scope.threeCanvas.data.textures.length; i++){
			var property = 'iTexture' + i;
            scope.currentObj().material.uniforms[property].value = scope.threeCanvas.data.textures[i];
		}
	}
}
