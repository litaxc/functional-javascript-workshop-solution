function curryN(fn, n) {
    n = n || fn.length;
    
    function curryFn(prev) {
	return function(arg) {
	    var args = prev.concat(arg);
	    if(args.length === n) {
		return fn.apply(null, args);
	    }	    
	    return curryFn(args);
	};
    }

    return curryFn([]);
}

module.exports = curryN;
