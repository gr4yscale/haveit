import Connections from './collections/Connections';

Meteor.methods({
	addFriend:function(username) {
    var friend = Meteor.users.findOne({'username' : username}); //TOFIX: find users by username

    if (friend && friend.username !== Meteor.user().username) {
        var connection = Connections.build();
        connection.set({source: Meteor.userId(), destination: friend._id});
        connection.save();
        console.log('addFriend' + arguments);
      }
    },

    //TOFIX: secure this; make it getFriends (no passing in userId)
    // getFriendsForId:function(userId) {
    //   var friend_ids = Connections.find( { source: userId} )
    //                               .map(function(item){ return item.get('destination'); });
    //   if (friend_ids.length > 0) {
    //     return Meteor.users.find( {_id : {$in : friend_ids}} ).fetch();
    //   }
    //   return [];
    // }
});
