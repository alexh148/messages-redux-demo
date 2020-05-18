import { ADD_MESSAGE, REMOVE_MESSAGE } from "./actionTypes";

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    case REMOVE_MESSAGE:
      return state.filter(m => m.id !== action.idToRemove);
    default:
      return state;
  }
};

export default messagesReducer;
