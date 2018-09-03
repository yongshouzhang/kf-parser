/**
 * “积分”预处理器
 */
define( function () {

    return function ( input ) {

        return input.replace( /\\(?:c|)(i+)n(t{1,2})(\b|[^a-zA-Z])/g, function ( match, sign, posi ) {

            return "\\int "+ sign.length+(match.indexOf("c")===1?"0":"1")+(posi.length == 1 ? " n " : " t ");

        } );

    };

} );