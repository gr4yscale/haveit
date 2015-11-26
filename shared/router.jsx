//FlowRouter.triggers.enter([function() { updateFriends(); }]); // updateFriends is global in Meteor.startup(). Must be defined at runtime

FlowRouter.route('/', {
    action: function(params, queryParams) {
      ReactLayout.render(LinkList, {})
    }
});

FlowRouter.route('/sent', {
    action: function(params, queryParams) {
      BlazeLayout.render("mainLayout", {main: "linkListSent"});
    }
});

FlowRouter.route('/share', {
    action: function(params, queryParams) {
    ReactLayout.render(LinkShare, {})
    }
});

FlowRouter.route('/friends', {
    action: function(params, queryParams) {
      BlazeLayout.render("mainLayout", {main: "friends"});
    }
});
