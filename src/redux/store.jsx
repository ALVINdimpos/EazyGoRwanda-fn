import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import mapReducer from './reducers/mapReducer'; // Import your reducer(s) here

const rootReducer = combineReducers({
  map: mapReducer, // Add more reducers as needed
  // otherReducers: otherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
