var fff = function(i, l, x, cb, done){
    var threads = Math.min(l-i, x);

    return new Promise(function(resolve){
        var next_i = i,
            running_threads = threads;

        var next = function(){
            if(next_i === l){
                running_threads--;

                if(running_threads === 0){
                    if(typeof done === 'function')
                        done();

                    return resolve();
                };

                // ---

                return;
            };

            // ---

            cb(next_i++, next);
        };

        // ---

        next_i = i + threads; // if cb is not async, main js thread will just loop, possibly running out of stack
        for(var t = 0;t<threads; t++)
            cb(i + t, next);
    });
};

module.exports = fff;

