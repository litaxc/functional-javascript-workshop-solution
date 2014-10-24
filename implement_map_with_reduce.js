module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(prev, curr, index, arr) {
	return prev.concat(fn(curr, index, arr));
    }, []);
};
