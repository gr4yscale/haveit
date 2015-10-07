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

  Template.links.helpers({
    links: function() {
      return Links.find( {'recipients': Meteor.user()._id} );
    },
    friends: function() {
      return Connections.find( { source: Meteor.user()._id} );
    }
  });

  Template.friends.helpers({
    friends: function() {
      var friend_ids = Connections.find( { source: Meteor.user()._id} )
                                  .map(function(item){ return item.destination; });

      return Meteor.users.find( {_id : {$in : friend_ids}} );
    }
  });

  Template.links.events({
    'submit #sendLinkForm': function (event, template) {
      var link = new Link({
        'url': event.target.url.value, 
        'title': 'title' + event.target.url.value, 
        'createdOn': Date.now(), 
        'recipients': ['9ohed4rkQpaSZfXhP'] 
      });
      link.save();
      return false;
    }
  });

  Template.friends.events({
    'submit #addFriendForm': function (event, template) {
      Meteor.call('addFriend', event.target.friendName.value, event.target.email.value);
      return false;
    }
  });

}