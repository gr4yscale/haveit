import { Component, PropTypes } from 'react';
import style from 'HavitApp/client/css/HavitApp.import.css';

export default class LinkCell extends Component {
  static propTypes = {
    link: PropTypes.object.isRequired
  }

  handleChecked(e) {
    // Set the checked property to the opposite of its current value
    Meteor.call('setChecked', this.props.todo._id, e.target.checked);
  }

  handleDelete() {
    Meteor.call('hideLink', this.props.link._id);
  }

  handleSetPrivate() {
    Meteor.call('setPrivate', this.props.link._id, !this.props.link.private);
  }

  renderTogglePrivate() {
    if (Meteor.userId() !== this.props.task.owner) {
      return null;
    }

    return (
      <button className={style.togglePrivate} onClick={this.handleSetPrivate.bind(this)}>
        {this.props.task.private ? 'Private' : 'Public'}
      </button>
    );
  }

  render() {
    let itemClass = '';

    if (this.props.task.read) {
      itemClass += style.checked;
    }

    if (this.props.link.private) {
      itemClass += ' ' + style.private;
    }

    return (
      <li className={itemClass}>
        <button className={style.delete} onClick={this.handleDelete.bind(this)}>&times;</button>
        <input type="checkbox" checked={this.props.task.checked} onChange={this.handleChecked.bind(this)} className={style.toggleChecked} />
        {this.renderTogglePrivate()}
        <span className={style.text}><strong>{this.props.link.sender}</strong> - <a href={this.props.link.url}>{this.props.link.title}</a></span>
      </li>
    );
  }
}
