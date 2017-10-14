import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore() {
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
