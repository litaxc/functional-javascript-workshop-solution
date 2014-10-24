function duckCount() {
    return Array.prototype.slice.call(arguments, 0)
	.filter(function(object) {
	    return Object.hasOwnProperty.call(object, 'quack');
	}).length;
}

module.exports = duckCount;
