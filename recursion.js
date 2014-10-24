function getDependencies(tree) {
    function recursion(tree, acc) {
	var d = tree.dependencies || [];

	Object.keys(d).forEach(function(dep) {
	    var s = dep + '@' + d[dep].version;
	    if(acc.indexOf(s) === -1) {
		acc.push(s);
	    }

	    recursion(d[dep], acc);
	});
	
	return acc;
    }

    return recursion(tree, []).sort();
}


module.exports = getDependencies;
