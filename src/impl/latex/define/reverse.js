/*!
 * 逆解析对照表
 */

define( function ( require ) {

    return {

        'combination': require( "impl/latex/reverse/combination" ),
        'fraction': require( "impl/latex/reverse/fraction" ),
        'function': require( "impl/latex/reverse/func" ),
        'integration': require( "impl/latex/reverse/integration" ),
        'subscript': require( "impl/latex/reverse/subscript" ),
        'superscript': require( "impl/latex/reverse/superscript" ),
        'script': require( "impl/latex/reverse/script" ),
        'radical': require( "impl/latex/reverse/sqrt" ),
        'summation': require( "impl/latex/reverse/summation" ),
        'brackets': require( "impl/latex/reverse/brackets" ),
        'mathcal': require( "impl/latex/reverse/mathcal" ),
        'mathfrak': require( "impl/latex/reverse/mathfrak" ),
        'mathbb': require( "impl/latex/reverse/mathbb" ),
        'mathrm': require( "impl/latex/reverse/mathrm" ),
        //手动添加
        "vertical":require( "impl/latex/reverse/vertical" ),
        
        'placeholder':require( "impl/latex/reverse/placeholder" ),
        'derivative':require( "impl/latex/reverse/derivative" ),
        'empty':require( "impl/latex/reverse/empty" )


    };

} );