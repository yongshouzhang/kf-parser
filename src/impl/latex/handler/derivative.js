define( function ( require ) {

    return function ( info, processedStack, unprocessedStack ) {

        var row = unprocessedStack.shift(),
            column = unprocessedStack.shift();

        info.operand = [unprocessedStack.shift(),unprocessedStack.shift()];
        
        info.callFn = {
            setType: [row,column]
        };

        delete info.handler;

        return info;

    };

} );