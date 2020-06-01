import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  count: countReducer,
  userReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
