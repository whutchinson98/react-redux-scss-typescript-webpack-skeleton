import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Apply Middleware
let middleware = applyMiddleware(
    thunk,
);

if (process.env.NODE_ENV !== 'production') {
  let composeEnhancers;
  const windowEnv:any = window;
  if (windowEnv.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = windowEnv.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  } else {
    composeEnhancers = compose;
  }
  middleware = composeEnhancers(middleware);
}


const store = createStore(rootReducer, {}, middleware);

export default store;
