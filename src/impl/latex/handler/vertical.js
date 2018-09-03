/*!
 * 纵向二元结合函数
 */

define( function () {

    return function (info,processStack,unprocessStack) {

        var oplist=[];
        while(unprocessStack.length){
            oplist.push(unprocessStack.shift());
        }
        return {
            name: "vertical",
             operand:oplist
        };
    };
} );
