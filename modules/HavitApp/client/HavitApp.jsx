import { Component, PropTypes } from 'react';

export default class HavitApp extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
