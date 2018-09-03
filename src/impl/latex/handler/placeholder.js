/*
*
*/
define(function(){
    
    return function (info) {
        delete info.handler;
        info.operand = [];
        return info;
    };

});