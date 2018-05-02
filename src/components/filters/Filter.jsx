import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';

import Search from './Search';
import CPA from './CPA';
import Categories from './Categories';

class Filter extends React.Component {
  render() {
    const {
      onSearchInputChange,
      categories,
      onCategorySelect,
      activeCategories,
      searchValue,
      onCpaChange,
      cpaMin,
      cpaMax,
    } = this.props;

    return (
      <Nav vertical>
        <NavItem>
          <Search onSearch={onSearchInputChange} value={searchValue} />
        </NavItem>
        <NavItem>
          <CPA onChange={onCpaChange} cpaMin={cpaMin} cpaMax={cpaMax} />
        </NavItem>
        <NavItem>
          <Categories
            data={categories}
            onSelect={onCategorySelect}
            activeCategories={activeCategories}
          />
        </NavItem>
      </Nav>
    );
  }
}

Filter.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  onCpaChange: PropTypes.func.isRequired,
  cpaMin: PropTypes.string.isRequired,
  cpaMax: PropTypes.string.isRequired,
};

export default Filter;
