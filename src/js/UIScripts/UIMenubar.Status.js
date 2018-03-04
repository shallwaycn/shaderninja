/**
 * @author mrdoob / http://mrdoob.com/
 */

UIMenubar.Status = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu right' );

	var autosave = new UI.THREE.Boolean( false, 'autosave' );
	autosave.text.setColor( '#888' );
	autosave.onChange( function () {

	} );
	//container.add( autosave );

	var version = new UI.Text( 'BETA 0.0.1');
	version.setClass( 'title' );
	//version.setOpacity( 0.5 );
	container.add( version );

	return container;
};