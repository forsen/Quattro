import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage'
import rootReducer from '../reducers';

const config = {
  key: 'root',
  storage
}

const reducer = persistReducer(config, rootReducer)
export default function configureStore() {
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
  let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { persistor, store }
}
