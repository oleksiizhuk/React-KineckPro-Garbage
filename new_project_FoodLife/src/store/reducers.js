import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import main from '../data/main/reducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  main
});

export default rootReducer;
