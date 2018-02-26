import 'document-register-element';
import ThreeCanvas from './ThreeCanvas';
import { initEditor, foldCode } from './CodeEditor';

import ErrorsDisplay from './ui/ErrorsDisplay';
import Helpers from './ui/Helpers';
import { subscribeMixin } from './tools/mixin';
import { saveAs } from './vendor/FileSaver.min.js';


export default class ShaderNinja {
    initShaderEditor(inited) {
        if (inited) {
            return;
        }

        // Default Context
        //if (!this.options.frag) {
        var innerHTML = this.shaderContainer.innerHTML.replace(/&lt;br&gt;/g, "");
        innerHTML = innerHTML.replace(/<br>/g, "");
        innerHTML = innerHTML.replace(/&nbsp;/g, "");
        innerHTML = innerHTML.replace(/&lt;/g, "<");
        innerHTML = innerHTML.replace(/&gt;/g, ">");
        innerHTML = innerHTML.replace(/&amp;/g, "&");
        //this.options.frag = innerHTML || EMPTY_FRAG_SHADER;

        if (innerHTML) {
            this.shaderContainer.innerHTML = '';
        }
        if (this.data.editorSource == 0) {
            this.shaderEditor = initEditor(this, this.shaderContainer, this.inputHeader());
        }
        else if (this.data.editorSource == 1) {
            this.shaderEditor = initEditor(this, this.shaderContainer, this.data.vertText);
        }
        else {
            this.shaderEditor = initEditor(this, this.shaderContainer, this.data.fragText);
        }
        this.shaderEditor.on('change', () => {
            this.updateShader();
        });
        this.errorsDisplay = new ErrorsDisplay(this, this.shaderEditor);
        this.shaderHelpers = new Helpers(this, this.shaderEditor);
    }

    inputHeader() {
        return ThreeCanvas.VERTEX_HEADER_THREE + this.threeCanvas.getInputHeader();
    }

    updateShader() {

        if (this.data.editorSource == 0) {
            return;
        }

        if (this.data.editorSource == 1) {
            this.data.vertText = this.shaderEditor.getValue();
        }
        else {
            this.data.fragText = this.shaderEditor.getValue();
        }

        this.threeCanvas.checkLoadEditorShader(this.data.fragText, this.data.vertText);
    }

    new(finishedCB) {
        let scope = this;
        this.threeCanvas.new(() => {
            scope.data.fragText = scope.threeCanvas.curFragSahder();
            scope.data.vertText = scope.threeCanvas.curVertexShader();
            scope.initShaderEditor(scope.inited);
            scope.inited = true;
            if (finishedCB != null) {
                finishedCB();
            }
            if (scope.uiSettings != undefined) {
                scope.uiSettings.update();
            }
            scope.updateData();
        });
    }

    load(path,finishedCB){
        let scope = this;
        var loader = new THREE.FileLoader();
        loader.load( path, function ( text ) {
            var dataJSON = JSON.parse(text);
            scope.fromJSON(dataJSON,finishedCB);
        } );
    }

    loadFromInput(file, finishedCB) {
        var reader = new FileReader();
        let scope = this;
        reader.addEventListener('load', function (event) {
            var dataJSON = JSON.parse(event.target.result);
            scope.fromJSON(dataJSON, finishedCB)
        }, false);
        reader.readAsText(file);
    }

    toJSON() {
        return {
            threeCanvas: this.threeCanvas.toJSON(),
            data: this.data,
        };
    }

    fromJSON(json, finishedCB) {
        this.data = json.data;
        this.threeCanvas.loadFromJSON(json.threeCanvas, () => {
            this.initShaderEditor(this.inited);
            this.inited = true;
            if (finishedCB != null) {
                finishedCB();
            }
            this.updateData();
            if (this.uiSettings != undefined) {
                this.uiSettings.update();
            }
        });
    }

    constructor() {
        this.createFontLink();
        subscribeMixin(this);
        this.storage = new Storage();
        return this;
    }



    init(shaderContainer, viewportContainer, options) {
        this.inited = false;
        this.options = {};
        this.change = false;
        this.autoupdate = true;
        this.uiSettings = undefined;
        if (options) {
            this.options = options;
        }

        this.data = {
            vertText: '',
            fragText: '',
            editorSource: 2,
        };

        this.shaderContainer = shaderContainer;
        this.viewportContainer = viewportContainer;
        this.el_canvas = document.createElement('canvas');
        this.el_canvas.setAttribute('class', 'three_canvas');
        this.el_canvas.style.width = '100%';
        this.el_canvas.style.height = '100%';
        this.viewportContainer.appendChild(this.el_canvas);
        this.threeCanvas = new ThreeCanvas(this.el_canvas);
        //this.new(finishedCB);
        //this.load('./data/download.json', finishedCB);


        let scope = this;
        this.on('editor_source_changed', (args) => {
            scope.data.editorSource = parseInt(args.content);
            scope.updateData();
        });

        this.on('editor_editmode_changed', (args) => {
            this.threeCanvas.data.editMode = parseInt(args.content);
            scope.updateData();
        });

        //to do, use updateData()! 
        this.on('editor_objectType_changed', (args) => {
            this.threeCanvas.data.objectType = parseInt(args.content);
            this.threeCanvas.player.setObject(this.threeCanvas.data.objectType);
            this.threeCanvas.player.currentObj().scale.set(this.threeCanvas.data.objScale.x, this.threeCanvas.data.objScale.y, this.threeCanvas.data.objScale.z);
            this.threeCanvas.player.currentObj().position.set(this.threeCanvas.data.objPos.x, this.threeCanvas.data.objPos.y, this.threeCanvas.data.objPos.z);
            this.threeCanvas.player.currentObj().rotation.set(this.threeCanvas.data.objRot.x, this.threeCanvas.data.objRot.y, this.threeCanvas.data.objRot.z);
        });

        this.on('editor_blending_changed', (args) => {
            this.threeCanvas.data.blending = parseInt(args.content);
            this.threeCanvas.player.curMaterial().blending = parseInt(args.content);
        });

        this.on('editor_side_changed', (args) => {
            this.threeCanvas.data.side = parseInt(args.content);
            this.threeCanvas.player.curMaterial().side = parseInt(args.content);
        });

        this.on('editor_shading_changed', (args) => {
            this.threeCanvas.data.flatShading = args.content;
            this.threeCanvas.player.curMaterial().flatShading = args.content;
        });

        this.on('editor_wireframe_changed', (args) => {
            this.threeCanvas.data.wireframe = args.content;
            this.threeCanvas.player.curMaterial().wireframe = args.content;
        });

        this.on('editor_transparent_changed', (args) => {
            this.threeCanvas.data.transparent = args.content;
            this.threeCanvas.player.curMaterial().transparent = args.content;
        });

        this.on('editor_depthwrite_changed', (args) => {
            this.threeCanvas.data.depthWrite = args.content;
            this.threeCanvas.player.curMaterial().depthWrite = args.content;
        });

        this.on('editor_depthtest_changed', (args) => {
            this.threeCanvas.data.depthTest = args.content;
            this.threeCanvas.player.curMaterial().depthTest = args.content;
        });

        this.on('editor_pass_added', (args) => {
            this.threeCanvas.data.renderPasses.push(scope.threeCanvas.newPass(this.threeCanvas.data.renderPasses.length));
            //this.threeCanvas.refreshUniforms();
            this.updateData();
        });

        this.on('editor_pass_poped', (args) => {
            this.threeCanvas.data.renderPasses.pop();
            //this.threeCanvas.refreshUniforms();
            this.updateData();
        });

        this.on('editor_texture_added', (args) => {
            this.threeCanvas.data.textures.push(null);
            //this.threeCanvas.refreshUniforms();
            this.updateData();
        });

        this.on('editor_texture_poped', (args) => {
            this.threeCanvas.data.textures.pop();
            this.updateData();
        });
    }

    updateData() {


        this.threeCanvas.refreshUniforms();

        //update edit mode
        this.data.fragText = this.threeCanvas.curFragSahder();
        this.data.vertText = this.threeCanvas.curVertexShader();

        //update editor source
        if (this.data.editorSource == 0) {
            this.shaderEditor.setValue(this.inputHeader());
        }
        else if (this.data.editorSource == 1) {
            this.shaderEditor.setValue(this.data.vertText);
        }
        else if (this.data.editorSource == 2) {
            this.shaderEditor.setValue(this.data.fragText);
        }
        this.updateShader();
    }

    resize() {
        //w,h could be ??%, so get the dom client width and height here.
        this.threeCanvas.resize(this.viewportContainer.clientWidth, this.viewportContainer.clientHeight);
    }

    download() {
        let data = this.toJSON();
        let content = JSON.stringify(data,
            (key, value) => {
                return typeof value === 'number' ? parseFloat(value.toFixed(6)) : value;
            },
            '\t');
        content = content.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, '$1');

        // let name = this.getTitle();
        // if (name !== '') {
        //     name += '-';
        // }
        // name += new Date().getTime();


        const blob = new Blob([content], { type: "application/json" });
        saveAs(blob, 'download.json');
    }

    createFontLink() {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        head.appendChild(link);
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}
window.ShaderNinja = ShaderNinja;
