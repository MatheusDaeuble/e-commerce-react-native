import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import filter from './filter';
import car from './car';

export default combineReducers({
  categories,
  products,
  filter,
  car,
});
