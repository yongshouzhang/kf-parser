/**
 * 预处理器列表
 */

define( function ( require ) {

    return {

        // 积分预处理器
        int: require( "impl/latex/pre/int" ),
        sum: require( "impl/latex/pre/sum" ),
        // 引号预处理
        quot: require( "impl/latex/pre/quot" ),

        derivative: require( "impl/latex/pre/derivative" )

    };

} );