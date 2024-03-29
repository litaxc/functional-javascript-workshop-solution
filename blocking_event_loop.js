function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    setTimeout(function() {
	repeat(operation, --num);
    }, 0.1);
}

module.exports = repeat;
