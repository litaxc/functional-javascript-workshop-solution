function repeat(callback, num) {
    for(var i = 0; i < num; i++) {
	callback();
    }
}

module.exports = repeat;
    
