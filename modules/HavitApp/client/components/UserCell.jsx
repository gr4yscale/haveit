import { Component, PropTypes } from 'react';
import style from 'HavitApp/client/css/HavitApp.import.css';

export default class UserCell extends Component {
  static propTypes = {
    friend: PropTypes.object.isRequired
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
      <li>
        <button className={style.delete} onClick={this.handleDelete.bind(this)}>&times;</button>
        <div>{this.props.friend.username}</div>
      </li>
    );

  }
}
