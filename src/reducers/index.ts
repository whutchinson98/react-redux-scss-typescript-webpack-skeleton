import {combineReducers} from 'redux';
import temp from './TempReducer';
// import reducers here

const rootReducer = combineReducers({
  // reducers go here
  TempReducer: temp,
});

export default rootReducer;
