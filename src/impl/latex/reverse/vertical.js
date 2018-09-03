/*!
 * 逆解析处理函数: vertical
 */

define( function () {

    /**
     * operands中元素对照表
     * 0: 表达式
     * 1: 指数
     */
    return function ( operands ) {

        var result = [ "\\vertical" ];

        for(var i=0;i<operands.length&&operands[i];i++){
            result.push(operands[ i ]);
        }
       return result.join( "" );
    };

} );
