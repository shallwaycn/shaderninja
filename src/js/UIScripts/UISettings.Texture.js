/**
 * @author mrdoob / http://mrdoob.com/
 */

UISettings.Texture = function ( editor ) {
	
	this.container = new UI.Panel();
	//container.setDisplay( 'none' );

	this.container.add( new UI.Text( 'Texture' ));
	this.container.add( new UI.Break() );
	this.container.add( new UI.Break() );
	this.editor = editor;
	this.textureContainer = new UI.Row();
	this.container.add( this.textureContainer );

	let scope = this;

	var newScript = new UI.Button( 'New' );
	newScript.onClick( function () {
		scope.editor.trigger('editor_texture_added', { owner: scope, content: null, });
		scope.update();
	} );
	this.container.add( newScript );

	var popScript = new UI.Button( 'Pop' );
	popScript.onClick( function () {
		scope.editor.trigger('editor_texture_poped', { owner: scope, content: null, });
		scope.update();
	} );

	this.container.add( popScript );
	this.update();
	return this;
};

UISettings.Texture.prototype.constructor = UISettings.Texture;
UISettings.Texture.prototype.update = function () {
	this.textureContainer.clear();
	let scope = this;
	var textures = this.editor.threeCanvas.data.textures;
	if ( textures.length > 0 ) {
		//textureContainer.setDisplay( 'block' );
		//console.log(textures.length);
		for ( var i = 0; i < textures.length; i ++ ) {
			var textureRow = new UI.Row();
			textureRow.add( new UI.Text( 'iTexture' + i ).setWidth( '90px' ) );
			var textureMap = new UI.Texture().onChange( function(texture, index){
				scope.editor.threeCanvas.data.textures[ index ] = texture;
			} );
			textureMap.setIndex(i);
			if (scope.editor.threeCanvas.data.textures[i] != null){
				textureMap.setValue(scope.editor.threeCanvas.data.textures[i]);
				// editor.threeCanvas.data.textures[0].needsUpdate = true;
				// editor.threeCanvas.data.textures[0].onUpdate = ()=>{
				// 	textureMap.setValue.setValue(editor.threeCanvas.data.textures[0]);
				// 	console.log(123);
				// };
			}
			textureRow.add( textureMap );
			scope.textureContainer.add( textureRow );
			scope.textureContainer.add( new UI.Break() );
		}
	}
};