import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import List from './List';
import Filter from './filters/Filter';

class Page extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.hasOwnProperty('data')) {
      return { data: nextProps.data };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      activeCategories: [],
      cpaMin: '',
      cpaMax: '',
      searchValue: '',
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.onCpaChange = this.onCpaChange.bind(this);
  }

  onSearchInputChange(searchValue) {
    this.setState({
      searchValue,
    }, () => this.performSearch());
  }

  onCategorySelect(category) {
    const alreadyIn = this.inActiveCategories(category.id);

    if (alreadyIn) {
      this.removeCategory(category);
    } else {
      this.addCategory(category);
    }
  }

  onCpaChange(value, isMax = false) {
    const cpa = isMax ? 'cpaMax' : 'cpaMin';
    this.setState({ [cpa]: value }, () => this.performSearch());
  }

  addCategory(category) {
    this.setState(
      prevState => (
        { activeCategories: [...prevState.activeCategories, category.id] }),
      () => this.performSearch(),
    );
  }

  removeCategory(category) {
    this.setState(
      prevState => (
        { activeCategories: prevState.activeCategories.filter(id => id !== category.id) }),
      () => this.performSearch(),
    );
  }

  inActiveCategories(categoryId) {
    return this.state.activeCategories.includes(categoryId);
  }

  performSearch() {
    const filteredData = this.props.data.filter(shop => (
      this.filterByName(shop) && this.filterByCategories(shop) && this.filterByCpa(shop)
    ));

    this.setState({
      data: filteredData,
    });
  }

  filterByName(shop) {
    return shop.name.includes(this.state.searchValue);
  }

  filterByCpa(shop) {
    const cpa = parseInt(shop.cpa, 10);
    const filterMin = cpa >= +this.state.cpaMin;
    const filterMax = this.state.cpaMax === '' ? true : cpa <= +this.state.cpaMax;

    return filterMin && filterMax;
  }

  filterByCategories(shop) {
    if (this.state.activeCategories.length > 0) {
      return (
        this.inActiveCategories(shop.categories[0].main_id) ||
        this.filterBySubCategories(shop.categories[0])
      );
    }
    return true;
  }

  filterBySubCategories(category) {
    if (category.hasOwnProperty('other_categories')) {
      return category.other_categories.filter(cat => this.inActiveCategories(cat.id)).length > 0;
    }

    return false;
  }

  render() {
    const {
      categories,
    } = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col md={8}>
            <List data={this.state.data} />
          </Col>
          <Col md={4}>
            <Filter
              activeCategories={this.state.activeCategories}
              categories={categories}
              onCategorySelect={this.onCategorySelect}
              onSearchInputChange={this.onSearchInputChange}
              searchValue={this.state.searchValue}
              cpaMin={this.state.cpaMin}
              cpaMax={this.state.cpaMax}
              onCpaChange={this.onCpaChange}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  data: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Page;
