import * as actionTypes from "../../actions/actionTypes";
const initialState = {
  login: true,
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default user;
