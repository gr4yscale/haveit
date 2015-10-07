Meteor.startup(function () {

});

Meteor.methods({
	addFriend:function(friendName, email) {
		var friend = Meteor.users.findOne({'emails.0.address' : email});

		if (friend) {
			  var connection = new Connection({source: Meteor.userId(), destination: friend._id});
			  connection.save();
			  console.log('addFriend' + arguments);
			}
		}
	});
