FlowRouter.route('/', {
    action: function(params, queryParams) {
		BlazeLayout.render("mainLayout", {main: "links"});
    }
});

FlowRouter.route('/friends', {
    action: function(params, queryParams) {
		BlazeLayout.render("mainLayout", {main: "friends"});
    }
});