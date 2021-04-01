import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import WelcomePage from './pages/Welcome'
// Not found
import NotFound from './pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;