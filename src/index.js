
import React, {Component} from 'react';
import createNavigator from 'routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'config/ReactotronConfig';
import { store, persistor } from 'store';

export default class App extends Component {

  render () {
    const Routes = createNavigator();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}
