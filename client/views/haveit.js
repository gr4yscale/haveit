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

  Template.linkList.helpers({
    links: function() {
      return Links.find();
    }
  });

  Template.linkList.events({
    'submit #sendLinkForm': function (event, template) {
      var link = new Link({'url': event.target.url.value, 'title': 'title' + event.target.url.value, 'createdOn': Date.now()});
      console.log(link);
      link.save();
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
