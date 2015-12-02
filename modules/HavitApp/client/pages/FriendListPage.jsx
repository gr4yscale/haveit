import { Component } from 'react';
import ReactMixin from 'react-mixin';

import Links from 'HavitApp/collections/Links';
import style from '../css/HavitApp.import.css';

import UserCell from '../components/UserCell';

import Connections from '../../collections/Connections';

@ReactMixin.decorate(ReactMeteorData)
export default class FriendListPage extends Component {

  getMeteorData() {
    let friends = null;
    var friend_ids = Connections.find( { source: Meteor.userId() } )
                                .map(function(item){ return item.get('destination'); });
    if (friend_ids.length > 0) {
      friends = Meteor.users.find( {_id : {$in : friend_ids}} ).fetch();
    }
    this.data.friends = friends;
    return {friends};
  }

  // handleToggleHideCompleted = (e) => {
  //   this.setState({ hideCompleted: e.target.checked });
  // }

  _handleAddFriend(e) {
    e.preventDefault();
    Meteor.call('addFriend', this.usernameTextInput.value);
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
