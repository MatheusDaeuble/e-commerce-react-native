import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ProductsActions } from 'store/ducks/products';
import { Creators as FilterActions } from 'store/ducks/filter';

export function* getFilter (filter) {
  try{
    const response = yield call (api.get, '/category_products?id=' + filter.payload.filter);
    yield put(ProductsActions.getProductsSuccess(response.data[0].products));
    yield put(FilterActions.getFilterSuccess());

  } catch (error) {
    console.log(error)
    yield put(ProductsActions.getProductsSuccess([]));
  }
}
