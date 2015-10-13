FlowRouter.route('/', {
    action: function(params, queryParams) {
		BlazeLayout.render("mainLayout", {main: "linkList"});
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
