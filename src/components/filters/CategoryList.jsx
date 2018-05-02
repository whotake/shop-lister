import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class CategoryList extends React.Component {
  render() {
    const {
      onSelect,
      data,
      activeCategories,
    } = this.props;

    const isActive = item => activeCategories.includes(item.id);

    return (
      <div>
        {
          data.map(item => (
            <a href="#" className={cx('dropdown-item', { active: isActive(item) })} onClick={() => onSelect(item)}>{item.title}</a>
          ))
        }
      </div>
    );
  }
}

CategoryList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
};

export default CategoryList;
