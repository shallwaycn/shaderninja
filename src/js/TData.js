import { RenderPass } from './RenderPass';

export class TData {
	constructor(owner) {
		this.owner = owner;
		this.textures = new Array(2);
		this.images = {};
		this.editMode = 0;
		this.blending = 0;
		this.side = 0;
		this.transparent = false;
		this.objScale = new THREE.Vector3( 1, 1, 1 );
		this.objPos = new THREE.Vector3( 0, 0, 0 );
		this.objRot = new THREE.Vector3( 0, 0, 0 );
		this.objectType = 0;
		this.flatShading = false;
		this.wireframe = false;
		this.depthWrite = true;
		this.depthTest = true;
		this.renderPasses = new Array();
		this.passDatas = [];
		this.showScene = false;
		this.useLight = false;
		this.animateScale = false;
	}

	toJSON(){
		var texData = [];
		this.images = {};
		var backup = this.textures.slice();
		this.textures = new Array(2);
		for (var i = 0; i < backup.length; i++){
			if (backup[i] == null || backup[i].image == undefined || backup[i].image == null){
				texData.push(null);
			}
			else{
				//NOTE!!! 
				//toJSON(this) will set images data, and textures!!
				texData.push(backup[i].toJSON(this));
			}
		}
		this.textures = backup;

		this.passDatas = [];
		for (var i = 0; i < this.renderPasses.length; i++){
			this.passDatas.push(this.renderPasses[i].toJSON());
		}

		return {
			textures: texData,
			images: this.images,
			editMode: this.editMode,
			blending: this.blending,
			side: this.side,
			transparent: this.transparent,
			objScale: this.objScale,
			objPos: this.objPos,
			objRot: this.objRot,
			objectType: this.objectType,
			flatShading:this.flatShading,
			wireframe:this.wireframe,
			depthWrite:this.depthWrite,
			depthTest:this.depthTest,
			passDatas: this.passDatas,
			showScene: this.showScene,
			useLight: this.useLight,
			animateScale:this.animateScale,
		}
	}

	loadFromJSON(json){

		this.textures = json.textures;
		this.images = json.images;
		this.editMode = json.editMode;
		this.blending = json.blending == undefined ? 0: json.blending;
		this.side = json.side == undefined ? 0: json.side;
		this.transparent = json.transparent == undefined ? true: json.transparent;
		
		this.objScale=json.objScale,
		this.objPos= json.objPos,
		this.objRot= json.objRot,
		this.objectType = json.objectType == undefined ? 0: json.objectType;
		this.flatShading = json.flatShading == undefined ? false: json.flatShading;
		this.wireframe = json.wireframe == undefined ? false: json.wireframe;
		this.depthWrite = json.depthWrite == undefined ? false: json.depthWrite;
		this.depthTest = json.depthTest == undefined ? false: json.depthTest;
		this.passDatas = json.passDatas;
		this.showScene = json.showScene;
		this.useLight = json.useLight;
		this.animateScale = json.animateScale == undefined ? false: json.animateScale;
		for (var i = 0; i < this.textures.length; i++){
            if (this.textures[i] == null){
                this.textures[i] = {};
            }
		}

		var loader = new THREE.ObjectLoader();
        var imageDatas = [];
        for(var ele in this.images){
            imageDatas.push(this.images[ele]);
        }

        var imageElements = loader.parseImages(imageDatas);

        var texDatas = loader.parseTextures(this.textures,imageElements);
		//this.textures = [];
		
		
		for (var i = 0; i < this.textures.length; i++){
			if (this.textures[i].uuid == undefined){
				continue;
			}
			for(var ele in texDatas){
				if (this.textures[i].uuid === ele){
					this.textures[i] = texDatas[ele];
				}
			}
		}
	}
}
