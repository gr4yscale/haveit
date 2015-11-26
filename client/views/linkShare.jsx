LinkShare = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    // This is the place to subscribe to any data you need
    let userId = Meteor.userId();
    let handle = Meteor.subscribe("friends", userId);

    let friend_ids = Connections.find( { source: userId} )
                                .map(function(item){ return item.get('destination'); });
    let friendList = [];
    if (friend_ids.length > 0) {
      friendList = Meteor.users.find( {_id : {$in : friend_ids}} ).fetch();
    }

    return {
      friendListLoading: ! handle.ready(), // Use handle to show loading state
      friendList: friendList
    };
  },
  render: function() {
    let friendList = this.data.friendList.map(function(friend){
      return <div>{friend.name}</div>;
    });

    return (<div>
      <a href="/">Back to inbox</a>
      <h1>Share Link:</h1>
      <form id="shareLinkForm">
        <div>
        <input type="text" default="url" name="url" /> URL
        </div>
        <div>
    		<input type="text" default="title" name="title" /> Title
        </div>
        <div>
    		<input type="text" default="comments" name="comments" /> Comments
        </div>

        <div>
          <select id="friendsSelect" multiple="multiple">
            {friendList}
          </select>
        </div>

        <div>
      		<input type="submit" name="shareLink" value="Send" />
        </div>
    	</form>
    </div>);
  }
});
