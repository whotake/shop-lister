import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

import data, { getCategories } from './mockData';
import Page from './components/Page';
import './App.css';

class App extends Component {
  render() {
    const categories = getCategories(data);

    return (
      <React.Fragment>
        <Navbar color="light" light>
          <NavbarBrand>Shop-lister</NavbarBrand>
        </Navbar>
        <Container className="pt-4">
          <Page data={data} categories={categories} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
