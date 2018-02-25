/**
 * @author mrdoob / http://mrdoob.com/
 */

UISettings.Editor = function (editor) {
	this.container = new UI.Panel();
	this.editor = editor;
	var editorTextRow = new UI.Row();

	var toption = {
		0: 'Input',
		1: 'Vertex Editor',
		2: 'Fragment Editor',
	}
	this.editorSource = new UI.Select().setOptions(toption).setWidth('200px');

	let scope = this;
	this.editorSource.onChange(function () {
		scope.editor.trigger('editor_source_changed', { owner: scope, content: scope.editorSource.getValue(), });
	});
	//editorTextRow.add(new UI.Text('Editor Source').setWidth('90px'));
	editorTextRow.add(this.editorSource);
	this.container.add(editorTextRow);

	// var editModeRow = new UI.Row();
	// var options = {};
	// options[0] = 'OBJECT';
	// for (var i = 0; i < editor.threeCanvas.data.renderPasses.length; i++) {
	// 	options[i + 1] = 'PASS' + (i);
	// }

	// this.editMode = new UI.Select().setOptions(options);

	// this.editMode.onChange(function () {
	// 	scope.editor.trigger('editor_editmode_changed', { owner: scope, content: scope.editMode.getValue(), });
	// });
	// editModeRow.add(new UI.Text('Edit Mode').setWidth('90px'));
	// editModeRow.add(this.editMode);
	// this.container.add(editModeRow);


	this.container.add( new UI.Text( 'Render Pass' ));
	this.passContainer = new UI.Row();
	this.container.add(this.passContainer);


	var newPass = new UI.Button('New');
	newPass.onClick(function () {
		scope.editor.trigger('editor_pass_added', { owner: scope, content: null, });
		scope.update();
	});
	this.container.add(newPass);

	var popPass = new UI.Button('Pop');
	popPass.onClick(function () {
		//force to object 
		if (scope.editor.threeCanvas.data.editMode == scope.editor.threeCanvas.data.renderPasses.length){
			scope.editor.threeCanvas.data.editMode = 0;
		}
		scope.editor.trigger('editor_pass_poped', { owner: scope, content: null, });
		scope.update();
	});

	this.container.add(popPass);

	// var modal = new UI.Modal();
	// modal.show( new UI.Text('Modal'));
	// this.container.add(modal); 

	this.update();

	return this;
};
UISettings.Editor.prototype.setRenderToScreen = function (index, flag) {
	let scope = this;



	scope.editor.threeCanvas.data.renderPasses[index].renderToScreen = flag;

	if (!flag){
		var allDisabled = true;
		for (var k = 0; k < scope.editor.threeCanvas.data.renderPasses.length; k++) {
			if (scope.editor.threeCanvas.data.renderPasses[k].renderToScreen) {
				allDisabled = false;
			}
		}

		if (allDisabled){
			scope.editor.threeCanvas.data.renderPasses[index].renderToScreen = true;
			return;
		}
	}
	else{
		for (var k = 0; k < scope.editor.threeCanvas.data.renderPasses.length; k++) {
			if (k != index) {
				scope.editor.threeCanvas.data.renderPasses[k].renderToScreen = false;
			}
		}
	}
}

UISettings.Editor.prototype.selectPass = function (index) {
	let scope = this;
	scope.buttons.forEach(function(element) {
		if (element.index != index){
			element.setClass('button');
		}
		else{
			element.setClass('selected');
		}
	});

	scope.rows.forEach(function(element) {
		if (element.index != index){
			element.setId('');
		}
		else{
			element.setId('row-selected');
		}
	});
}

UISettings.Editor.prototype.constructor = UISettings.Editor;
UISettings.Editor.prototype.update = function () {

	this.editorSource.setValue(this.editor.data.editorSource);


	//update passes
	let scope = this;
	this.passContainer.clear();

	this.buttons = [];
	this.rows = [];

	//add object pass,
	var objRow = new UI.Row();
	objRow['index'] = 0;
	var objEditButton = new UI.Button('Object').setWidth('100px');
	objEditButton['index'] = 0;
	objEditButton.onClick(function () {
		scope.editor.trigger('editor_editmode_changed', { owner: scope, content: 0, });
		scope.update();
		scope.selectPass(0);
	});
	this.buttons.push(objEditButton);
	this.rows.push(objRow);
	objRow.add(objEditButton);
	objRow.add(new UI.Text('Object Shader').setWidth('200px'));
	this.passContainer.add(objRow);
	

	//add render passes
	var passes = this.editor.threeCanvas.data.renderPasses;
	if (passes.length > 0) {
		for (var i = 0; i < passes.length; i++) {

			var objectName = new UI.Input().setWidth('80px').setFontSize('14px');
			objectName['index'] = i;
			objectName.setValue(scope.editor.threeCanvas.data.renderPasses[i].passName);
			objectName.onChange(function () {
				scope.editor.threeCanvas.data.renderPasses[this.index].passName = this.getValue();
			});

			
			var passRow = new UI.Row();
			passRow['index'] = i + 1;
			var editButton = new UI.Button('iPass' + i).setWidth('100px'); 
			editButton['index'] = i + 1;
			editButton.setClass('button');
			editButton.onClick(function () {
				scope.editor.trigger('editor_editmode_changed', { owner: scope, content: this.index, });
				scope.update();
				scope.selectPass(this.index);
			});
			this.buttons.push(editButton);
			this.rows.push(passRow);


			var renderToScreen = new UI.Checkbox().setLeft('100px');
			renderToScreen['index'] = i;

			scope.setRenderToScreen(i, scope.editor.threeCanvas.data.renderPasses[i].renderToScreen);
			renderToScreen.setValue(scope.editor.threeCanvas.data.renderPasses[i].renderToScreen);
			renderToScreen.onChange(function () {
				var flag = this.getValue();
				scope.setRenderToScreen(this.index, flag);
				scope.update();
			});

			passRow.add(editButton);
			passRow.add(objectName);
			passRow.add(renderToScreen);
			passRow.add(new UI.Text('RenderToScreen').setWidth('120px'));

			// down sample
			if (!scope.editor.threeCanvas.data.renderPasses[i].renderToScreen) {
				var sample = new UI.Number(1).setWidth('60px').setRange(0.05, 1);
				sample['index'] = i;
				sample.setValue(scope.editor.threeCanvas.data.renderPasses[i].downRes);
				sample.onChange(function () {
					scope.editor.threeCanvas.data.renderPasses[this.index].setRes(this.getValue());
				});
				passRow.add(new UI.Text('Size').setWidth('40px'));
				passRow.add(sample);
			}
			//this.passContainer.add(new UI.Break());
			this.passContainer.add(passRow);
		}
	}

	this.selectPass(this.editor.threeCanvas.data.editMode);
};
