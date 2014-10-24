function logger(namespace) {
    return function() {
	var list = Array.prototype.slice.call(arguments);
	console.log.apply(null, [namespace].concat(list));
    };
}

module.exports = logger;
