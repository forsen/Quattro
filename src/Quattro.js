import React from 'react';
import { Provider } from 'react-redux';

import Dummy from './containers/Landing';
import configureStore from './store/index';

const store = configureStore();

const Quattro = () => (
  <Provider store={store}>
    <Dummy />
  </Provider>
);

export default Quattro;
