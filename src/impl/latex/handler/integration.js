/*!
 * 积分函数处理器
 */

define( function ( require ) {

    var ScriptExtractor = require( "impl/latex/handler/lib/script-extractor" );

    return function ( info, processedStack, unprocessedStack ) {

        var count = unprocessedStack.shift(),
            type= unprocessedStack.shift(),
            position=unprocessedStack.shift(), 
            params = ScriptExtractor.exec( unprocessedStack );

        info.operand = [ params.expr, params.superscript, params.subscript ];
        // 参数配置调用
        info.callFn = {
            setType: [ count | 0, type||"1",position]
        };

        delete info.handler;

        return info;

    };

} );