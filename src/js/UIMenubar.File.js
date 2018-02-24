/**
 * @author mrdoob / http://mrdoob.com/
 */

UIMenubar.File = function ( editor ) {

	var NUMBER_PRECISION = 6;

	function parseNumber( key, value ) {

		return typeof value === 'number' ? parseFloat( value.toFixed( NUMBER_PRECISION ) ) : value;

	}

	//

	var config = editor.config;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'File' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// New

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'New' );
	option.onClick( function () {
		//if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {
			editor.new();
		//}
	} );
	options.add( option );


	// Import

	var form = document.createElement( 'form' );
	form.style.display = 'none';
	document.body.appendChild( form );

	var fileInput = document.createElement( 'input' );
	fileInput.type = 'file';
	fileInput.addEventListener( 'change', function ( event ) {
		//console.log(fileInput.files[ 0 ]);
		editor.load( fileInput.files[ 0 ].path, null );
		form.reset();
	} );
	form.appendChild( fileInput );

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Load' );
	option.onClick( function () {
		fileInput.click();
	} );
	options.add( option );
	
	
	//Download
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Download' );
	option.onClick( function () {
		editor.download();
	} );
	options.add( option );

	return container;
};
