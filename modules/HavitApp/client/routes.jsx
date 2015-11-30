import { Route, IndexRoute, Link } from 'react-router';

import HavitApp from './HavitApp';
import LinkListPage from './pages/LinkListPage';
import FriendListPage from './pages/FriendListPage';

export default (
    <Route path="/" component={HavitApp}>
      <IndexRoute component={LinkListPage} />
      <Route path="/friends" component={FriendListPage}/>
    </Route>
);
