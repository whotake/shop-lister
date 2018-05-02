import React from 'react';
import { storiesOf } from '@storybook/react';

import data from '../mockData';
import List from '../components/List';

storiesOf('List', module)
  .add('Список', () => (
    <List data={data} />
  ));
