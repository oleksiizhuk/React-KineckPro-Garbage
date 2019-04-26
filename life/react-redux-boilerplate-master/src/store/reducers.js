import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Name from '../data/Name/reducer.js'
import Todo from '../data/Todo/reducer.js'

const rootReducer = combineReducers({
  routing: routerReducer,
  Name,
  Todo
});

export default rootReducer;
