/*!
 * 逆解析处理函数: summation
 */

define( function () {

    /**
     * operands中元素对照表
     * 0: 上标
     * 1: 下标
     */
    return function ( operands ) {

        var result = [];
        // 上标
        if (operands[1]) {
            result.push("^" + operands[1]);
        }
        // 下标
        if (operands[2]) {
            result.push("_" + operands[2]);
        }
        result.push(" " + operands[0]);
        if (this.callFn && this.callFn.setType) {
            var list=['a','v','u','n','c','p'];
            if(list.indexOf(this.callFn.setType[0])!=-1){
                result.unshift(this.callFn.setType[0]);
            }
        }
        result.unshift("sum");

        result.unshift("\\");

        return result.join("");
    };
} );
