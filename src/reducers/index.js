import { combineReducers } from 'redux';
import homePageReducer from '../home/modules';

export default combineReducers({
  homePage: homePageReducer,
});
