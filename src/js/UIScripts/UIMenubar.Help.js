/**
 * @author mrdoob / http://mrdoob.com/
 */

UIMenubar.Help = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Help' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// About
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'About' );
	option.onClick( function () {
		window.open('http://www.shallway.ninja/shaderninja', '_blank');
	} );
	options.add( option );

	//Source Code
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Source Code' );
	option.onClick( function () {
		window.open('https://github.com/shallwaycn/shaderninja', '_blank');
	} );
	options.add( option );

	return container;
};