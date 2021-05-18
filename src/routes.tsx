import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Explorar from './pages/Explorar';
import Dashboard from './pages/Dashboard';

// Not found
import NotFound from './pages/NotFound';

// navigations
import NavigationSmall from './components/Navigation/Small';
import NavigationMedium from './components/Navigation/Medium';

// Footer
import FooterMedium from './components/Footer/Medium';
import FooterSmall from './components/Footer/Small';



const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationSmall />
      <NavigationMedium />
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/explorar/:type" component={Explorar}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="*" component={NotFound} />
      </Switch>
      <FooterSmall />
      <FooterMedium />
    </BrowserRouter>
  );
}

export default Routes;