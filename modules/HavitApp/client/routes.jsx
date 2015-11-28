import { Route, IndexRoute } from 'react-router';

import HavitApp from './HavitApp';
import HavitMain from './HavitMain';

export default (
  <Route path="/" component={HavitApp}>
    <IndexRoute component={HavitMain} />
  </Route>
);
