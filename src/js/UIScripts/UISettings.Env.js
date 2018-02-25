/**
 * @author mrdoob / http://mrdoob.com/
 */

UISettings.Env = function (editor) {
	this.container = new UI.Panel();
	this.editor = editor;
	let scope = this;



	var showSceneRow = new UI.Row();
	this.showScene = new UI.Checkbox().setLeft('100px');
	this.showScene.onChange(function () {
		scope.editor.threeCanvas.data.showScene = scope.showScene.getValue();
		if (scope.showScene.getValue()){
			scope.editor.threeCanvas.player.createEnvScene();
		}
		else{
			scope.editor.threeCanvas.player.clearEnvScene();
		}
		scope.editor.threeCanvas.player.useLight(scope.editor.threeCanvas.data.useLight);
		scope.update();
		scope.editor.updateData();
	});
	showSceneRow.add(new UI.Text('Show Scene').setWidth('90px'));
	showSceneRow.add(this.showScene);
	this.container.add(showSceneRow);

	this.sceneContainer = new UI.Row();
	this.container.add( this.sceneContainer );

	var resetCamera = new UI.Button( 'Reset Camera' );
	resetCamera.onClick( function () {
		scope.editor.threeCanvas.resetCamera();
	} );

	this.container.add( resetCamera );
	this.update();
	return this;
};


UISettings.Env.prototype.constructor = UISettings.Env;
UISettings.Env.prototype.update = function () {
	this.showScene.setValue(this.editor.threeCanvas.data.showScene);
	

	this.sceneContainer.clear();
	let scope = this;
	if (this.editor.threeCanvas.data.showScene){
		var useLightRow = new UI.Row();
		this.useLight = new UI.Checkbox().setLeft('100px');
		this.useLight.setValue(this.editor.threeCanvas.data.useLight);
		this.useLight.onChange(function () {
			scope.editor.threeCanvas.data.useLight = scope.useLight.getValue();
			scope.editor.threeCanvas.player.useLight(scope.editor.threeCanvas.data.useLight);
			scope.editor.updateData();
		});
		useLightRow.add(new UI.Text('Use Light').setWidth('90px'));
		useLightRow.add(this.useLight);
		this.sceneContainer.add(useLightRow);
	}
};
