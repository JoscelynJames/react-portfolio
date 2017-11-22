import React, { Component } from 'react';
// import './css/app.css';
import './css/newApp.css';
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import MainPage from './components/MainPage';
// import AboutMe from './components/AboutMe';
// import SideNav from './components/SideNav';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Card from './components/Card';
import Grid from './components/Grid';
import NavBar from './components/NavBar';
// import DetailCard from './components/DetailCard';

class App extends Component {
  render() {
    return <div className="App">
      <NavBar />
      {/* <SideNav /> */}
      {/* <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/about" component={AboutMe} />
          </Switch>
        </BrowserRouter> */}
      {/* <MainPage />
      <div className="proj-about">
        <Projects />
        <AboutMe />
      </div> */}
      {/* <Contact /> */}
      <Grid />
      {/* <DetailCard /> */}
    </div>;
  }
}

export default App;
