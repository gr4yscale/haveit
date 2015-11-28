import Tasks from 'HavitApp/collections/Links';

  // addTask: function (text) {
  //   // Make sure the user is logged in before inserting a task
  //   if (! Meteor.userId()) {
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Tasks.insert({
  //     text: text,
  //     createdAt: new Date(),
  //     owner: Meteor.userId(),
  //     username: Meteor.user().username
  //   });
  // },
  // deleteTask: function (taskId) {
  //   var task = Tasks.findOne(taskId);
  //   if (task.private && task.owner !== Meteor.userId()) {
  //     // If the task is private, make sure only the owner can delete it
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Tasks.remove(taskId);
  // },
  // setChecked: function (taskId, setChecked) {
  //   var task = Tasks.findOne(taskId);
  //   if (task.private && task.owner !== Meteor.userId()) {
  //     // If the task is private, make sure only the owner can check it off
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Tasks.update(taskId, { $set: { checked: setChecked} });
  // },
  // setPrivate: function (taskId, setToPrivate) {
  //   var task = Tasks.findOne(taskId);
  //
  //   // Make sure only the task owner can make a task private
  //   if (task.owner !== Meteor.userId()) {
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Tasks.update(taskId, { $set: { private: setToPrivate } });
  // }
Meteor.methods({
});

/*
Meteor.methods({
	addFriend:function(username) {
    var friend = Meteor.users.findOne({'username' : username}); //TOFIX: find users by username

    if (friend) {
        var connection = Connections.build();
        connection.set({source: Meteor.userId(), destination: friend._id});
        connection.save();
        console.log('addFriend' + arguments);
      }
    },

    //TOFIX: secure this; make it getFriends (no passing in userId)
    getFriendsForId:function(userId) {
      var friend_ids = Connections.find( { source: userId} )
                                  .map(function(item){ return item.get('destination'); });
      if (friend_ids.length > 0) {
        return Meteor.users.find( {_id : {$in : friend_ids}} ).fetch();
      }
      return [];
    }
});
*/
