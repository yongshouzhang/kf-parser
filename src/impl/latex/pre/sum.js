/**
 * 求和预处理 
 */
define( function () {

    return function ( input ) {

        return input.replace(/\\sum(a|v|u|n|p|c\b)/g, function (match, sign, suffix) {

            return "\\sum  " + (sign || "s");

        });

    };

} );