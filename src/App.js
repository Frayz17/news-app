import React from 'react';
import { Route, Switch } from 'react-router';
import Navigation from 'modules/Navigation';
import { Art, Main, Popular, Sport } from 'routes';
// import contentSearch from 'services/guardianApi/contentSearch';

export default React.memo(function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/popular">
          <Popular />
        </Route>
        <Route exact path="/sport">
          <Sport />
        </Route>
        <Route exact path="/art">
          <Art />
        </Route>
      </Switch>
    </>
  );
});
