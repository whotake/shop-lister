import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

import data, { getCategories } from './mockData';
import Page from './components/Page';

class App extends Component {
  render() {
    const categories = getCategories(data);

    return (
      <Container>
        <Page data={data} categories={categories} />
      </Container>
    );
  }
}

export default App;
