import React, { Component } from 'react';
// import './css/app.css';
import './css/newApp.css';
import { BrowserRouter, Route } from "react-router-dom";

import Grid from './components/Grid';
import NavBar from './components/NavBar';
// import DetailCard from './components/DetailCard';

class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={NavBar} />
          <Grid />
        </div>
      </BrowserRouter>
    </div>);
  }
}

export default App;
