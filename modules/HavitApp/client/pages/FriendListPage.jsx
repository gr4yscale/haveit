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

  render() {
    if (!this.data.friends) {
      return <span>NO FRIENDS</span>;
    }

    return (
        <div>
          <div key="test1">Yow</div>
          <div key="test2" className={style.container}>
              <ul>
                {this.data.friends.map(friend => <UserCell key={friend._id} friend={friend} />)}
              </ul>
          </div>
        </div>
    );
  }
};
