if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.onlyIfLoggedIn.helpers({
    authInProcess: function() {
      return Meteor.loggingIn();
    },
    canShow: function() {
      return !!Meteor.user();
    }
  });

  // LinkList
  //
  Template.linkList.helpers({
    links: function() {
      //TOFIX: also find links if your userId is in a list of recipients
      return Links.find( {'recipients': Meteor.user()._id} );
    }
  });

  // LinkShare
  //
  
  //Template.linkShare.helpers({
    //friends: function() {
      //var friend_ids = Connections.find( { source: Meteor.user()._id} )
                                  //.map(function(item){ return item.destination; });

      //var friends = Meteor.users.find( {_id : {$in : friend_ids}} );

      //return friends;
    //}
  //});

  Template.linkShare.events({
    'submit #shareLinkForm': function (event, template) {
      var link = new Link({
        'url': event.target.url.value, 
        'title': event.target.title.value, 
        'createdOn': Date.now(),
        'sender' : Meteor.userId(),
        'recipients': ['9ohed4rkQpaSZfXhP'] 
      });
      link.save();
      return false;
    }
  });

  // Friends


  Template.friends.created = function() {
    this.friendsStore = new ReactiveVar([]);

      Meteor.call('getFriendsForId', Meteor.user()._id, (error, data) => {
          console.log(data, arguments);
        if (error) {
          console.log('there was an error ' + error);
        } else {
          this.friendsStore.set(data);
        }
      });
  };

  Template.friends.helpers({

    friends: function() {
      return Template.instance().friendsStore.get();
    }
  });

  Template.friends.events({
    'submit #addFriendForm': function (event, template) {
      Meteor.call('addFriend', event.target.email.value);
      return false;
    }
  });

  // Utils
  
  HaveIt = {
    friendsForId: function(userId) {
      
      var friend_ids = Connections.find( { source: userId} )
                                  .map(function(item){ return item.destination; });
      if (friend_ids.length > 0) {
        var frndz = Meteor.users.find( {_id : {$in : friend_ids}} );
        debugger;
        return frndz;
      }
      return [];
    }
  };
}
