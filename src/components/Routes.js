import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Calculator from './Calculator';
import Quotes from './Quotes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
