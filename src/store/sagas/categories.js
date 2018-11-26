import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as CategoriesActions } from 'store/ducks/categories';

export function* getCategories () {
  try{
    const response = yield call (api.get, '/categories');
    yield put(CategoriesActions.getCategoriesSuccess(response.data));

  } catch (error) {
    yield put(CategoriesActions.getCategoriesSuccess([]));
  }
}
