import React, { Component } from 'react';
import './css/app.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SplashPage from './components/SplashPage';
import SideNav from './components/SideNav';

class App extends Component {
  render() {
    return <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SplashPage} />
            <Route path="/about" component={SideNav} />
          </Switch>
        </BrowserRouter>
      </div>;
  }
}

export default App;
