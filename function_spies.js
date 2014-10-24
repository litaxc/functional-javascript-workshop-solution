function Spy(target, method) {
    var result = {
	count: 0
    };
    
    var origin = target[method];
    target[method] = function() {
	result.count++;
	return origin.apply(this, arguments);
    };
    
    return result;
}

module.exports = Spy;
