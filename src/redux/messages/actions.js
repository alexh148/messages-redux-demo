import { ADD_MESSAGE, REMOVE_MESSAGE } from "./actionTypes";

export const addMessage = text => {
  const message = { id: Math.random(), text };
  return {
    type: ADD_MESSAGE,
    message
  };
};

export const removeMessage = id => {
  return {
    type: REMOVE_MESSAGE,
    idToRemove: id
  };
};
