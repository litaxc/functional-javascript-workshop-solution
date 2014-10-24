function countWords(inputWords) {
    return inputWords.reduce(function(obj, current) {
	obj[current] = ++obj[current] || 1;
	return obj;
    }, {});
}

module.exports = countWords;
