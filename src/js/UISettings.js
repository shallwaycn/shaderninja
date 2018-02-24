/**
 * @author mrdoob / http://mrdoob.com/
 */

var UISettings = function (editor) {

	this.container = new UI.Panel();
	this.container.setId('sidebar');
	this.editor = editor;
	let scope = this;

	var editorTab = new UI.Text('SHADER').onClick(onClick);
	var objectTab = new UI.Text('OBJECT').onClick(onClick);
	var textureTab = new UI.Text('TEXTURE').onClick(onClick);
	var envTab = new UI.Text('ENV').onClick(onClick);

	var tabs = new UI.Div();
	tabs.setId('tabs');
	tabs.add(editorTab, objectTab, textureTab, envTab);
	this.container.add(tabs);

	this.uiEditor = new UISettings.Editor(this.editor);
	var editorset = new UI.Span().add(
		scope.uiEditor.container,
	);
	this.container.add(editorset);

	this.uiTexture = new UISettings.Texture(this.editor);
	var textures = new UI.Span().add(
		scope.uiTexture.container,
	);
	this.container.add(textures);

	this.uiObject = new UISettings.Object(this.editor);
	var objectset = new UI.Span().add(
		scope.uiObject.container,
	);
	this.container.add(objectset);

	this.uiEnv = new UISettings.Env(this.editor);
	var envset = new UI.Span().add(
		scope.uiEnv.container,
	);
	this.container.add(envset);


	function onClick(event) {
		select(event.target.textContent);
	}


	function select(section) {

		editorTab.setClass('');
		objectTab.setClass('');
		textureTab.setClass('');
		envTab.setClass('');

		objectset.setDisplay('none');
		textures.setDisplay('none');
		editorset.setDisplay('none');
		envset.setDisplay('none');
		switch (section) {
			case 'ENV':
				envTab.setClass('selected');
				envset.setDisplay('');
				break;
			case 'SHADER':
				editorTab.setClass('selected');
				editorset.setDisplay('');
				break;
			case 'OBJECT':
				objectTab.setClass('selected');
				objectset.setDisplay('');
				break;
			case 'TEXTURE':
				textureTab.setClass('selected');
				textures.setDisplay('');
				break;
		}

	}

	select('SHADER');
	this.update();
	return this;
};

UISettings.prototype.constructor = UISettings;
UISettings.prototype.update = function () {
	this.uiEditor.update();
	this.uiObject.update();
	this.uiTexture.update();
	this.uiEnv.update();
};
