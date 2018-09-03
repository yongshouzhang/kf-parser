define( function () {
   
    return function ( operands ) {

        var result = [ "\\derivate" ];

        if ( this.callFn && this.callFn.setType ) {
            result.push("-");
            result.push(this.callFn.setType[0]);
            result.push("-");
            result.push(this.callFn.setType[0]);
        }
        result.push(operands[0]);

        return result.join("");
    };

} );