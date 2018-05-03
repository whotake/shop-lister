import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

import CategoryList from './CategoryList';

class Item extends React.Component {
  render() {
    const {
      shop,
    } = this.props;

    return (
      <Card>
        <CardImg top width="10%" title={shop.name} src={shop.logo} alt={shop.name} />
        <CardBody>
          <CardTitle>{shop.name}</CardTitle>
          <CardSubtitle>
            <CategoryList categories={shop.categories[0]} />
          </CardSubtitle>
          <CardSubtitle>
            <Badge color="warning" pill title="CPA" className="mt-3">{shop.cpa}</Badge>
          </CardSubtitle>
          <Button href={shop.deep_link} className="mt-2" title="Перейти">Перейти</Button>
        </CardBody>
      </Card>
    );
  }
}

Item.propTypes = {
  shop: PropTypes.object.isRequired,
};

export default Item;
