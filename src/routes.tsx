import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import WelcomePage from './pages/Welcome'

// Not found
import NotFound from './pages/NotFound';

// navigations
import NavigationSmall from './components/Navigation/Small';
import NavigationMedium from './components/Navigation/Medium';

// Footer
import FooterMedium from './components/Footer/Medium';
import FooterSmall from './components/Footer/Small';
import Explorar from './pages/Explorar';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationSmall />
      <NavigationMedium />
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/explorar/:type" component={Explorar}/>
        <Route exact path="*" component={NotFound} />
      </Switch>
      <FooterSmall />
      <FooterMedium />
    </BrowserRouter>
  );
}

export default Routes;