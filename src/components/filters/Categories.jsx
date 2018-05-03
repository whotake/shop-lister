import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Categories extends React.Component {
  render() {
    const {
      onSelect,
      data,
      activeCategories,
    } = this.props;

    const isActive = item => activeCategories.includes(item.id);

    return (
      <div>
        <span className="filter-title">
            Категории
        </span>
        {
          data.map(item => (
            <a href="#" className={cx('dropdown-item', { active: isActive(item) })} onClick={() => onSelect(item)}>{item.title}</a>
          ))
        }
      </div>
    );
  }
}

Categories.propTypes = {
  onSelect: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
};

export default Categories;
