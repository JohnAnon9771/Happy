import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/app" component={OrphanagesMap} />
  </Switch>
);

export default Routes;
