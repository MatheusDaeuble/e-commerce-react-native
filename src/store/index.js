import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore (persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export {store, persistor};
