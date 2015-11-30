import { Component, PropTypes } from 'react';
import style from 'HavitApp/client/css/HavitApp.import.css';

const LoginButtons = BlazeToReact('loginButtons');

export default class HavitHeader extends Component {

  render() {
    return (
      <header>
        <a href="/friends">Friends</a>
        <LoginButtons />
      </header>
    );
  }
}
