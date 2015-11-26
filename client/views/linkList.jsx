LinkList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return { };
  },
  render: function() {
    let friendList = this.data.friendList.map(function(friend){
      return <div>{friend.name}</div>;
    });

    return (<div>
      <h1>havit</h1>
      <a href="/share">Share!</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/sent">Sent</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/friends">Friends</a>
    </div>);
  }
});
