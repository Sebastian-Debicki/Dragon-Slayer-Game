import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore)

export default createStoreWithMiddleware(reducers);