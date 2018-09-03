/*!
 * 逆解析处理函数: integration
 */

define( function () {

    /**
     * operands中元素对照表
     * 0: 上标
     * 1: 下标
     */
    return function ( operands ) {

        var result=[];

        // 修正多重积分的序列化
        if ( this.callFn && this.callFn.setType ) {
            for ( var i = 0, len = this.callFn.setType[0]; i < len; i++ ) {
                result.push( "i" );
            }
            result.push( "nt " );
            result.unshift(this.callFn.setType[1]==="0"?"c":"");
            
             if (this.callFn.setType[2] == "t") {
                result.push("t");
            }
            result.unshift( "\\ " );
        }

        // 上标
        if ( operands[ 1 ] ) {
            result.push( "^" + operands[ 1 ] );
        }

        // 下标
        if ( operands[ 2 ] ) {
            result.push( "_" + operands[ 2 ] );
        }

        if ( operands[ 0 ] ) {
            result.push( " " + operands[ 0 ] );
        }

        return result.join( "" );

    };

} );
