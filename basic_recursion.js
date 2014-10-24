function reduce(arr, fn, initial) {
    if(arr.length === 0) return initial;
    var accumulate = initial;
    fn(accumulate, arr[0], fn);
    arr.shift();
    return reduce(arr, fn, accumulate);
}

module.exports = reduce;
