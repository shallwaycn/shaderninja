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
		this.curMaterial().extensions.derivatives = true;
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
			geometry = new THREE.SphereBufferGeometry( 1, 50, 50 );
		}
		else if (type == 1){
			geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
		}
		else if (type == 2){
			geometry = new THREE.TorusKnotBufferGeometry( 1, 0.4, 64, 8 );
		}
		else if (type == 3){
			geometry = new THREE.PlaneBufferGeometry(3,3,40,40);
		}
		else if (type == 4){
			geometry = new THREE.CylinderBufferGeometry(1,1,3,50);
		}
		else if (type == 5){
			geometry = new THREE.IcosahedronBufferGeometry( 1, 1 );
		}
		else if(type == 6){
			geometry = new THREE.TorusBufferGeometry(1,0.4,16,100);
		}

		//THREE.BufferGeometryUtils.computeTangents( geometry );
		this.computeTangent(geometry);
		// geometry.verticesNeedUpdate = true;
		// geometry.normalsNeedUpdate = true;
		// geometry.uvsNeedUpdate = true;
		// //geometry.computeCentroids();
		// geometry.computeFaceNormals();
		// geometry.computeVertexNormals();
		// geometry.computeMorphNormals();
		// geometry.computeTangents();

		this.curObj = new THREE.Mesh( geometry, this.curMaterial() );
		this.curObj.name = "MeshObj";
		this.curObj.position.set(0, 0, 0);

		let scope = this;
		// this.curObj.onBeforeRender = function( renderer, scene, camera, geometry, material, group ) {
		// 	material.uniforms.iTime.value = performance.now() / 1000.0; 
		// };
		
		this.scene.add(this.curObj);
	}

	computeTangent ( geometry ) {

		var index = geometry.index;
		var attributes = geometry.attributes;

		if (attributes == undefined){
			console.error('compute tangent function only support buffer geometry');
			return;
		}

		// based on http://www.terathon.com/code/tangent.html
		// (per vertex tangents)

		if ( index === null ||
			 attributes.position === undefined ||
			 attributes.normal === undefined ||
			 attributes.uv === undefined ) {

			console.warn( 'THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()' );
			return;

		}

		var indices = index.array;
		var positions = attributes.position.array;
		var normals = attributes.normal.array;
		var uvs = attributes.uv.array;

		var nVertices = positions.length / 3;

		if ( attributes.tangent === undefined ) {

			geometry.addAttribute( 'tangent', new THREE.BufferAttribute( new Float32Array( 4 * nVertices ), 4 ) );

		}

		var tangents = attributes.tangent.array;

		var tan1 = [], tan2 = [];

		for ( var k = 0; k < nVertices; k ++ ) {

			tan1[ k ] = new THREE.Vector3();
			tan2[ k ] = new THREE.Vector3();

		}

		var vA = new THREE.Vector3(),
			vB = new THREE.Vector3(),
			vC = new THREE.Vector3(),

			uvA = new THREE.Vector2(),
			uvB = new THREE.Vector2(),
			uvC = new THREE.Vector2(),

			sdir = new THREE.Vector3(),
			tdir = new THREE.Vector3();

		function handleTriangle( a, b, c ) {

			vA.fromArray( positions, a * 3 );
			vB.fromArray( positions, b * 3 );
			vC.fromArray( positions, c * 3 );

			uvA.fromArray( uvs, a * 2 );
			uvB.fromArray( uvs, b * 2 );
			uvC.fromArray( uvs, c * 2 );

			var x1 = vB.x - vA.x;
			var x2 = vC.x - vA.x;

			var y1 = vB.y - vA.y;
			var y2 = vC.y - vA.y;

			var z1 = vB.z - vA.z;
			var z2 = vC.z - vA.z;

			var s1 = uvB.x - uvA.x;
			var s2 = uvC.x - uvA.x;

			var t1 = uvB.y - uvA.y;
			var t2 = uvC.y - uvA.y;

			var r = 1.0 / ( s1 * t2 - s2 * t1 );

			sdir.set(
				( t2 * x1 - t1 * x2 ) * r,
				( t2 * y1 - t1 * y2 ) * r,
				( t2 * z1 - t1 * z2 ) * r
			);

			tdir.set(
				( s1 * x2 - s2 * x1 ) * r,
				( s1 * y2 - s2 * y1 ) * r,
				( s1 * z2 - s2 * z1 ) * r
			);

			tan1[ a ].add( sdir );
			tan1[ b ].add( sdir );
			tan1[ c ].add( sdir );

			tan2[ a ].add( tdir );
			tan2[ b ].add( tdir );
			tan2[ c ].add( tdir );

		}

		var groups = geometry.groups;

		if ( groups.length === 0 ) {

			groups = [ {
				start: 0,
				count: indices.length
			} ];

		}

		for ( var j = 0, jl = groups.length; j < jl; ++ j ) {

			var group = groups[ j ];

			var start = group.start;
			var count = group.count;

			for ( var i = start, il = start + count; i < il; i += 3 ) {

				handleTriangle(
					indices[ i + 0 ],
					indices[ i + 1 ],
					indices[ i + 2 ]
				);

			}

		}

		var tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
		var n = new THREE.Vector3(), n2 = new THREE.Vector3();
		var w, t, test;

		function handleVertex( v ) {

			n.fromArray( normals, v * 3 );
			n2.copy( n );

			t = tan1[ v ];

			// Gram-Schmidt orthogonalize

			tmp.copy( t );
			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

			// Calculate handedness

			tmp2.crossVectors( n2, t );
			test = tmp2.dot( tan2[ v ] );
			w = ( test < 0.0 ) ? - 1.0 : 1.0;

			tangents[ v * 4 ] = tmp.x;
			tangents[ v * 4 + 1 ] = tmp.y;
			tangents[ v * 4 + 2 ] = tmp.z;
			tangents[ v * 4 + 3 ] = w;

		}

		for ( var j = 0, jl = groups.length; j < jl; ++ j ) {

			var group = groups[ j ];

			var start = group.start;
			var count = group.count;

			for ( var i = start, il = start + count; i < il; i += 3 ) {

				handleVertex( indices[ i + 0 ] );
				handleVertex( indices[ i + 1 ] );
				handleVertex( indices[ i + 2 ] );

			}

		}

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
			if (scope.currentObj().material.uniforms[property].value != null && scope.currentObj().material.uniforms[property].value != undefined){
				scope.currentObj().material.uniforms[property].value.wrapS = scope.currentObj().material.uniforms[property].value.wrapT = THREE.RepeatWrapping;
			}
		}
	}
}
