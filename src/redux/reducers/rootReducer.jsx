import { combineReducers } from 'redux';
import mapReducer from './reducers/mapReducer';
import anotherReducer from './reducers/anotherReducer';

const rootReducer = combineReducers({
  map: mapReducer,
  another: anotherReducer,
  // Add more reducers as needed
});

export default rootReducer;
