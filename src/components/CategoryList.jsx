import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

class CategoryList extends React.Component {
  render() {
    const {
      categories,
    } = this.props;

    return (
      <React.Fragment>
        <Badge color="primary" pill>{categories.main_title}</Badge>
        {' '}
        {
          categories.hasOwnProperty('other_categories') && categories.other_categories.map(cat => (
            <React.Fragment>
              <Badge pill>{cat.title}</Badge>
              {' '}
            </React.Fragment>
          ))
        }
      </React.Fragment>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
