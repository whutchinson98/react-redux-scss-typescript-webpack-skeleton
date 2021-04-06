import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  // initial state for the reducer goes here
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.EXAMPLE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
