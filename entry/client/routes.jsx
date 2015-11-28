import { Route } from 'react-router';

import havitRoutes from 'HavitApp/client/routes'

ReactRouterSSR.Run(
  <Route>
    {havitRoutes}
  </Route>
);
