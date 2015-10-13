Meteor.startup(function () {

});

Meteor.methods({
	addFriend:function(email) {
    var friend = Meteor.users.findOne({'emails.0.address' : email});

    if (friend) {
        var connection = new Connection({source: Meteor.userId(), destination: friend._id});
        connection.save();
        console.log('addFriend' + arguments);
      }
    },
    
    getFriendsForId:function(userId) {
      var friend_ids = Connections.find( { source: userId} )
                                  .map(function(item){ return item.destination; });
      if (friend_ids.length > 0) {
        return Meteor.users.find( {_id : {$in : friend_ids}} ).fetch();
      }
      return [];
    }
});
