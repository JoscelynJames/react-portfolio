import React, { Component } from 'react';
import './css/app.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import SideNav from './components/SideNav';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return <div className="App">
      <SideNav />
        {/* <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/about" component={AboutMe} />
          </Switch>
        </BrowserRouter> */}
        <MainPage />
        <Projects />
        <AboutMe />
      </div>;
  }
}

export default App;
