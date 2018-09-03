/**
 *导数预处理 
 */
define( function () {

    return function ( input ) {

        return input.replace( /\\derivative-(\d)-(\d)\b/g, function ( match, row, column ) {

            return "\\derivative" + row + column;

        } );

    };

} );