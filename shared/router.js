FlowRouter.route('/', {
    action: function(params, queryParams) {
      BlazeLayout.render("mainLayout", {main: "linkListReceived"});
    }
});

FlowRouter.route('/sent', {
    action: function(params, queryParams) {
      BlazeLayout.render("mainLayout", {main: "linkListSent"});
    }
});

FlowRouter.route('/share', {
    action: function(params, queryParams) {
      BlazeLayout.render("mainLayout", {main: "linkShare"});
    }
});

FlowRouter.route('/friends', {
    action: function(params, queryParams) {
      BlazeLayout.render("mainLayout", {main: "friends"});
    }
});
