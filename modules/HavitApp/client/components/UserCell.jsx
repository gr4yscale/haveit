import { Component, PropTypes } from 'react';
import style from 'HavitApp/client/css/HavitApp.import.css';

export default class FriendCell extends Component {
  static propTypes = {
    link: PropTypes.object.isRequired
  }

  // handleChecked(e) {
  //   // Set the checked property to the opposite of its current value
  //   Meteor.call('setChecked', this.props.todo._id, e.target.checked);
  // }

  handleDelete() {
    Meteor.call('hideLink', this.props.link._id);
  }


  render() {
    return (
      <li className={itemClass}>
        <button className={style.delete} onClick={this.handleDelete.bind(this)}>&times;</button>
        <div>{this.props.friend.name}</div>
      </li>
    );

  }
}
