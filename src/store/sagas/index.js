import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from 'store/ducks/categories';
import { Types as ProductsTypes } from 'store/ducks/products';
import { Types as FilterTypes } from 'store/ducks/filter';
import { getCategories } from './categories';
import { getProducts } from './products';
import { getFilter} from './filter';

export default function* rootSaga(){
  return yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(ProductsTypes.GET_REQUEST, getProducts),
    takeLatest(FilterTypes.GET_REQUEST, getFilter),

  ]);
}
