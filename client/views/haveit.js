if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

  // Global as fuck
  console.log('isClient called');

  // counter starts at 0
  Session.setDefault('counter', 0);

  // Autorun
  Deps.autorun(function() {
    // update friends list when user becomes available - HACK
    if (Meteor.user()) {
      Meteor.call('getFriendsForId', Meteor.user()._id, (error, data) => {
        if (error) {
          console.log('there was an error setting friends list ' + error);
        } else {
          Session.set('friendsList', data);
        }
      });
    }
  });

  // Layout templates

  Template.onlyIfLoggedIn.helpers({
    authInProcess: function() {
      return Meteor.loggingIn();
    },
    canShow: function() {
      return !!Meteor.user();
    }
  });


  // LinkListReceived
  
  Template.linkListReceived.helpers({
    receivedLinks: function() {
      return Links.find( {'recipients': Meteor.user()._id} );
    }
  });


  // LinkListSent
  
  Template.linkListSent.helpers({
    sentLinks: function() {
      return Links.find( {'sender': Meteor.user()._id} );
    }
  });


  // LinkShare
  
  Template.linkShare.helpers({

    friends: function() {
      return Session.get('friendsList');
      //return Template.instance().friendsStore.get();
    }
  });

  Template.linkShare.events({
    'submit #shareLinkForm': function (event, template) {
      var selectedFriendIds = $(event.target.friendsSelect).val();
      var link = Links.build({
        'url': event.target.url.value, 
        'title': event.target.title.value,
        'comments' : event.target.comments.value,
        'createdOn': Date.now(),
        'sender' : Meteor.userId(),
        'recipients': selectedFriendIds
      });

      link.save();
      return false;
    }
  });

  // Friends

  Template.friends.helpers({

    friends: function() {
      return Session.get('friendsList');
      //return Template.instance().friendsStore.get();
    }
  });

  Template.friends.events({
    'submit #addFriendForm': function (event, template) {
      Meteor.call('addFriend', event.target.username.value);
      return false;
    }
  });
}
