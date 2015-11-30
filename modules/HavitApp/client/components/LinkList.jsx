import { Component, PropTypes } from 'react';
import LinkLiCell from './LinkCell';

export default class LinkList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  render() {
    return (
      <ul>
        {this.props.links.map(task => <LinkCell key={link._id} link={link} />)}
      </ul>
    );
  }
}
