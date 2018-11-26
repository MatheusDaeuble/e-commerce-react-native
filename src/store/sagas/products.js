import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as CategoriesActions } from 'store/ducks/products';

export function* getProducts () {
  try{
    const response = yield call (api.get, '/products');
    yield put(CategoriesActions.getProductsSuccess(response.data));

  } catch (error) {
    yield put(CategoriesActions.getProductsSuccess([]));
  }
}
