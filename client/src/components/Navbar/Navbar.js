import React from 'react';
import {Container} from '../Grid/Container';

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
    <Container>
      <h1 className="navbar-brand">Xmas List</h1>
      <h4 className="ml-auto navbar-brand">Total: {props.total} Remaining Total: {props.totalRemaining}</h4>
    </Container>
  </nav>
);

export default Navbar;
