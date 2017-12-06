import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';

const FourOhFour = () => <h1>404 Error. Please go home.</h1>;

const Main = () => (
  <BrowserRouter>
  <div className= 'app'>
    <Switch>
      <Route exact path='/' component={App} />
      <Route component={FourOhFour}/>
    </Switch>
  </div>
  </BrowserRouter>
);

render(<Main />, document.getElementById('app'));