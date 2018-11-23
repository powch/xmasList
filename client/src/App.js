import React, { Component } from 'react';
import { Row, Container, Col } from './components/Grid';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import API from './utils/API';
import './App.css';

class App extends Component {
  state={
    lists: [],
    total: 0,
    totalRemaining: 0
  }

  render() {
    return(
      <Wrapper>
        <Navbar
          total={this.state.total}
          totalRemaining={this.state.totalRemaining}
        />
      </Wrapper>
    );
  }
}

export default App;
