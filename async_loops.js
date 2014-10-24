function loadUsers(userIds, load, done) {
    var users = [];
    var completed = 0;

    userIds.forEach(function(id, index) {
	load(id, function(user) {
	    users[index] = user;

	    completed++;
	    if(completed  === userIds.length) {
		return done(users);
	    }
	});
    });
}

module.exports = loadUsers;
