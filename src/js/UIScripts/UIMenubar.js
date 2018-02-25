/**
 * @author mrdoob / http://mrdoob.com/
 */

var UIMenubar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'menubar' );

	container.add( new UIMenubar.File( editor ) );
	container.add( new UIMenubar.Status( editor ) );
	container.add( new UIMenubar.Help( editor ) );

	return container;

};
