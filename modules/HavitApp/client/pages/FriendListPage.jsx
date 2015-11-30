import { Component } from 'react';
import ReactMixin from 'react-mixin';

import Links from 'HavitApp/collections/Links';
import style from '../css/HavitApp.import.css';

import LinkListCell from '../components/LinkListCell';

import Connections from '../../collections/Connections';

@ReactMixin.decorate(ReactMeteorData)
export default class FriendListPage extends Component {

  state = {
    hideRead: false
  }

  getMeteorData() {
    //if (this.state.hideRead) {
    //  readFilter.checked = {$ne: true};
    //}

    let friends = null;
    var friend_ids = Connections.find( { source: Meteor.userId() } )
                                .map(function(item){ return item.get('destination'); });
    if (friend_ids.length > 0) {
      friends = Meteor.users.find( {_id : {$in : friend_ids}} ).fetch();
    }
    return {friends};
  }

  // handleToggleHideCompleted = (e) => {
  //   this.setState({ hideCompleted: e.target.checked });
  // }

  _handleAddFriend(e) {
    e.preventDefault();
    console.log('added user ', this.usernameTextInput.value);

    var friend = Meteor.users.findOne({'username' : this.usernameTextInput.value}); //TOFIX: find users by username

    if (friend && friend.username !== Meteor.user().username) {
        var connection = Connections.build();
        connection.set({source: Meteor.userId(), destination: friend._id});
        connection.save();
        console.log('addFriend' + arguments);
    }
  }

  render() {
    let friends = <span>NO FRIENDS</span>;
    if (this.data.friends) {
      friends = <div>
          <div key="friends" className={style.container}>
              <ul>
                {this.data.friends.map(friend => <UserCell key={friend._id} friend={friend} />)}
              </ul>
          </div>
        </div>;
    }

    return (
      <div>
        <form onSubmit={this._handleAddFriend.bind(this)}>
        <input type="text" ref={(ref) => this.usernameTextInput = ref} default="username"/>
        <input type="submit"/>
        </form>
        {friends}
      </div>
    );
  }
};
