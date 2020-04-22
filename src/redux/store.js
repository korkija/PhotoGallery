import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {photos} from './reducers/photo';
const reducers = combineReducers({photos});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
