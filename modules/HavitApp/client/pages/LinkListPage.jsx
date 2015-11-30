import { Component } from 'react';
import ReactMixin from 'react-mixin';

import HavitHeader from '../components/HavitHeader';

import Links from 'HavitApp/collections/Links';
import style from '../css/HavitApp.import.css';

import LinkListCell from '../components/LinkListCell';

@ReactMixin.decorate(ReactMeteorData)
export default class LinkListPage extends Component {

  state = {
    hideRead: false
  }

  getMeteorData() {
    Meteor.subscribe('links');

    let linkFilter = {};

    if (this.state.hideRead) {
      readFilter.checked = {$ne: true};
    }

    const links = Links.find(linkFilter, {sort: {createdAt: -1}}).fetch();
    const unreadCount = Links.find({read: {$ne: true}}).count();

    return {
      links,
      unreadCount,
      user: Meteor.user()
    };
  }

  handleToggleHideCompleted = (e) => {
    this.setState({ hideCompleted: e.target.checked });
  }

  render() {
    if (!this.data.links) {
      // loading
      return null;
    }

    return (
        <div className={style.container}>
          <HavitHeader
              incompleteCount={this.data.incompleteCount}
              hideCompleted={this.state.hideCompleted}
              toggleHideCompleted={this.handleToggleHideCompleted}
          />
            <ul>
              {this.data.links.map(task => <LinkCell key={link._id} link={link} />)}
            </ul>
        </div>
    );
  }
};
