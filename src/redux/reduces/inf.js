import * as constants from "../constants/index.js";

var initialState = {
  job: "front",
  age: 22
};

var reducer = (state = initialState, action) => {
  if (action.type === constants.inf) {
    return {
        job : action.inf.job,
        age : action.inf.age
    };
  }

  return state;
};
export default reducer;
