import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import Item from './Item';

class List extends React.Component {
  render() {
    const {
      data,
    } = this.props;

    return (
      <React.Fragment>
        {
          data.length > 0 && data.map(item => (
            <Row className="mb-3">
              <Item shop={item} />
            </Row>
          ))
        }
        {
          data.length === 0 && <h1 className="text-center">Ничего не найдено</h1>
        }
      </React.Fragment>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
