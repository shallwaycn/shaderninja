/**
 * @author mrdoob / http://mrdoob.com/
 */

UISettings.Object = function (editor) {
	this.container = new UI.Panel();
	this.editor = editor;

	let scope = this;

	//object type
	var objectTypeRow = new UI.Row();
	this.objectType = new UI.Select().setOptions({
		0: 'Sphere',
		1: 'Box',
		2: 'TorusKnot',
		3: 'Plane',
		4: 'Cylinder',
		5: 'Icosahedron',
		6: 'Torus',
	}).setWidth('150px').setFontSize('12px');

	this.objectType.onChange(function () {
		scope.editor.trigger('editor_objectType_changed', { owner: scope, content: scope.objectType.getValue(), });
	});

	objectTypeRow.add(new UI.Text('Geometry').setWidth('90px'));
	objectTypeRow.add(this.objectType);
	this.container.add(objectTypeRow);


	//blending
	var materialBlendingRow = new UI.Row();
	this.materialBlending = new UI.Select().setOptions({

		0: 'No',
		1: 'Normal',
		2: 'Additive',
		3: 'Subtractive',
		4: 'Multiply',
		5: 'Custom'

	}).setWidth('150px').setFontSize('12px');

	this.materialBlending.onChange(function () {
		scope.editor.trigger('editor_blending_changed', { owner: scope, content: scope.materialBlending.getValue(), });
	});

	materialBlendingRow.add(new UI.Text('Blending').setWidth('90px'));
	materialBlendingRow.add(this.materialBlending);

	this.container.add(materialBlendingRow);

	// side
	var materialSideRow = new UI.Row();
	this.materialSide = new UI.Select().setOptions({
		0: 'Front',
		1: 'Back',
		2: 'Double'

	}).setWidth('150px').setFontSize('12px');
	this.materialSide.onChange(function () {
		scope.editor.trigger('editor_side_changed', { owner: scope, content: scope.materialSide.getValue(), });
	});
	materialSideRow.add(new UI.Text('Side').setWidth('90px'));
	materialSideRow.add(this.materialSide);
	this.container.add(materialSideRow);



	//shading
	var materialShadingRow = new UI.Row();
	this.materialShading = new UI.Checkbox(false).setLeft('100px');
	this.materialShading.onChange(function () {
		scope.editor.trigger('editor_shading_changed', { owner: scope, content: scope.materialShading.getValue(), });
	});
	materialShadingRow.add(new UI.Text('Flat Shaded').setWidth('90px'));
	materialShadingRow.add(this.materialShading);
	this.container.add(materialShadingRow);


	//transparent
	var materialTransparentRow = new UI.Row();
	this.materialTransparent = new UI.Checkbox().setLeft('100px');
	this.materialTransparent.onChange(function () {
		scope.editor.trigger('editor_transparent_changed', { owner: scope, content: scope.materialTransparent.getValue(), });
	});
	materialTransparentRow.add(new UI.Text('Transparent').setWidth('90px'));
	materialTransparentRow.add(this.materialTransparent);
	this.container.add(materialTransparentRow);

	//depth write
	var materialDepthWriteRow = new UI.Row();
	this.materiallDepthWrite = new UI.Checkbox().setLeft('100px');
	this.materiallDepthWrite.onChange(function () {
		scope.editor.trigger('editor_depthwrite_changed', { owner: scope, content: scope.materiallDepthWrite.getValue(), });
	});
	materialDepthWriteRow.add(new UI.Text('Depth Write').setWidth('90px'));
	materialDepthWriteRow.add(this.materiallDepthWrite);
	this.container.add(materialDepthWriteRow);

	//depth test
	var materialDepthTestRow = new UI.Row();
	this.materiallDepthTest = new UI.Checkbox().setLeft('100px');
	this.materiallDepthTest.onChange(function () {
		scope.editor.trigger('editor_depthtest_changed', { owner: scope, content: scope.materiallDepthTest.getValue(), });
	});
	materialDepthTestRow.add(new UI.Text('Depth Test').setWidth('90px'));
	materialDepthTestRow.add(this.materiallDepthTest);
	this.container.add(materialDepthTestRow);

	// wireframe
	var materialWireframeRow = new UI.Row();
	this.materialWireframe = new UI.Checkbox().setLeft('100px');
	this.materialWireframe.onChange(function () {
		scope.editor.trigger('editor_wireframe_changed', { owner: scope, content: scope.materialWireframe.getValue(), });
	});
	materialWireframeRow.add(new UI.Text('Wireframe').setWidth('90px'));
	materialWireframeRow.add(this.materialWireframe);
	this.container.add(materialWireframeRow);

	// scale
	var scaleRow = new UI.Row();
	this.scaleX = new UI.Number(1).setWidth('60px').setRange(0, 100);
	this.scaleX.onChange(function () {
		scope.editor.threeCanvas.data.objScale.x = scope.scaleX.getValue();
		scope.editor.threeCanvas.player.currentObj().scale.set(scope.editor.threeCanvas.data.objScale.x, scope.editor.threeCanvas.data.objScale.y, scope.editor.threeCanvas.data.objScale.z);
	});
	this.scaleY = new UI.Number(1).setWidth('60px').setRange(0, 100);
	this.scaleY.onChange(function () {
		scope.editor.threeCanvas.data.objScale.y = scope.scaleY.getValue();
		scope.editor.threeCanvas.player.currentObj().scale.set(scope.editor.threeCanvas.data.objScale.x, scope.editor.threeCanvas.data.objScale.y, scope.editor.threeCanvas.data.objScale.z);
	});
	this.scaleZ = new UI.Number(1).setWidth('60px').setRange(0, 100);
	this.scaleZ.onChange(function () {
		scope.editor.threeCanvas.data.objScale.z = scope.scaleZ.getValue();
		scope.editor.threeCanvas.player.currentObj().scale.set(scope.editor.threeCanvas.data.objScale.x, scope.editor.threeCanvas.data.objScale.y, scope.editor.threeCanvas.data.objScale.z);
	});
	scaleRow.add(new UI.Text('Scale').setWidth('90px'));
	scaleRow.add(this.scaleX);
	scaleRow.add(this.scaleY);
	scaleRow.add(this.scaleZ);

	// animateScale
	this.animateScale = new UI.Checkbox();
	this.animateScale.onChange(function () {
		scope.editor.threeCanvas.data.animateScale = scope.animateScale.getValue();
	});

	scaleRow.add(this.animateScale);
	scaleRow.add(new UI.Text('Animate').setWidth('60px'));
	this.container.add(scaleRow);

	//pos
	var posRow = new UI.Row();
	this.posX = new UI.Number(0).setWidth('60px').setRange(-100, 100);
	this.posX.onChange(function () {
		scope.editor.threeCanvas.data.objPos.x = scope.posX.getValue();
		scope.editor.threeCanvas.player.currentObj().position.set(scope.editor.threeCanvas.data.objPos.x, scope.editor.threeCanvas.data.objPos.y, scope.editor.threeCanvas.data.objPos.z);
	});
	this.posY = new UI.Number(0).setWidth('60px').setRange(-100, 100);
	this.posY.onChange(function () {
		scope.editor.threeCanvas.data.objPos.y = scope.posY.getValue();
		scope.editor.threeCanvas.player.currentObj().position.set(scope.editor.threeCanvas.data.objPos.x, scope.editor.threeCanvas.data.objPos.y, scope.editor.threeCanvas.data.objPos.z);
	});
	this.posZ = new UI.Number(0).setWidth('60px').setRange(-100, 100);
	this.posZ.onChange(function () {
		scope.editor.threeCanvas.data.objPos.z = scope.posZ.getValue();
		scope.editor.threeCanvas.player.currentObj().position.set(scope.editor.threeCanvas.data.objPos.x, scope.editor.threeCanvas.data.objPos.y, scope.editor.threeCanvas.data.objPos.z);
	});
	posRow.add(new UI.Text('Position').setWidth('90px'));
	posRow.add(this.posX);
	posRow.add(this.posY);
	posRow.add(this.posZ);
	this.container.add(posRow);

	//rotation
	var rotRow = new UI.Row();
	this.rotX = new UI.Number(0).setStep(10).setUnit('°').setWidth('60px');
	this.rotX.onChange(function () {
		scope.editor.threeCanvas.data.objRot.x = scope.rotX.getValue();
		scope.editor.threeCanvas.player.currentObj().rotation.set(scope.editor.threeCanvas.data.objRot.x, scope.editor.threeCanvas.data.objRot.y, scope.editor.threeCanvas.data.objRot.z);
	});
	this.rotY = new UI.Number(0).setStep(10).setUnit('°').setWidth('60px');
	this.rotY.onChange(function () {
		scope.editor.threeCanvas.data.objRot.y = scope.rotY.getValue();
		scope.editor.threeCanvas.player.currentObj().rotation.set(scope.editor.threeCanvas.data.objRot.x, scope.editor.threeCanvas.data.objRot.y, scope.editor.threeCanvas.data.objRot.z);
	});
	this.rotZ = new UI.Number(0).setStep(10).setUnit('°').setWidth('60px');
	this.rotZ.onChange(function () {
		scope.editor.threeCanvas.data.objRot.z = scope.rotZ.getValue();
		scope.editor.threeCanvas.player.currentObj().rotation.set(scope.editor.threeCanvas.data.objRot.x, scope.editor.threeCanvas.data.objRot.y, scope.editor.threeCanvas.data.objRot.z);
	});
	rotRow.add(new UI.Text('Rotation').setWidth('90px'));
	rotRow.add(this.rotX);
	rotRow.add(this.rotY);
	rotRow.add(this.rotZ);
	this.container.add(rotRow);

	return this;
};

UISettings.Object.prototype.constructor = UISettings.Object;
UISettings.Object.prototype.update = function () {
	this.objectType.setValue(this.editor.threeCanvas.data.objectType);
	this.materialBlending.setValue(this.editor.threeCanvas.player.curMaterial().blending);
	this.materialTransparent.setValue(this.editor.threeCanvas.player.curMaterial().transparent);
	this.scaleX.setValue(this.editor.threeCanvas.data.objScale.x);
	this.scaleY.setValue(this.editor.threeCanvas.data.objScale.y);
	this.scaleZ.setValue(this.editor.threeCanvas.data.objScale.z);
	this.animateScale.setValue(this.editor.threeCanvas.data.animateScale);

	this.posX.setValue(this.editor.threeCanvas.data.objPos.x);
	this.posY.setValue(this.editor.threeCanvas.data.objPos.y);
	this.posZ.setValue(this.editor.threeCanvas.data.objPos.z);

	this.rotX.setValue(this.editor.threeCanvas.data.objRot.x);
	this.rotY.setValue(this.editor.threeCanvas.data.objRot.y);
	this.rotZ.setValue(this.editor.threeCanvas.data.objRot.z);

	this.materialSide.setValue(this.editor.threeCanvas.player.curMaterial().side);

	this.materialShading.setValue(this.editor.threeCanvas.player.curMaterial().flatShading);
	this.materialWireframe.setValue(this.editor.threeCanvas.player.curMaterial().wireframe);
	this.materiallDepthWrite.setValue(this.editor.threeCanvas.player.curMaterial().depthWrite);
	this.materiallDepthTest.setValue(this.editor.threeCanvas.player.curMaterial().depthTest);
};
