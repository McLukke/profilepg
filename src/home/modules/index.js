import actionTypes from './action-types';


export const toggleHeaderBg = trigger => ({
  type: actionTypes.toggleHeaderBg,
  payload: trigger,
});


const homePageReducer = (
  state = {
    showBg: false,
  },
  action,
) => {
  switch (action.type) {
    case actionTypes.toggleHeaderBg:
      return {
        ...state,
        showBg: action.payload,
      };

    default:
      return { ...state };
  }
};

export default homePageReducer;
