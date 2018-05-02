import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

class Search extends React.Component {
  render() {
    const {
      value,
      onSearch,
    } = this.props;

    return (
      <Input
        type="text"
        value={value}
        placeholder="Поиск"
        onChange={e => onSearch(e.target.value)}
      />
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
