import { combineReducers } from 'react-redux';

const HomePageReducer = (
  state = {},
  action,
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default combineReducers({
  data: HomePageReducer,
});
