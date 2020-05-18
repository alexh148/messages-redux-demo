const actionTypes = {
  ADD_MESSAGE: "ADD_MESSAGE",
  REMOVE_MESSAGE: "REMOVE_MESSAGE"
};

const initialState = {
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.push(action.message)
      };
    case actionTypes.REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(m => m.id !== action.idToRemove)
      };
    default:
      return state;
  }
};

const actions = {
  addMessage: function(text) {
    const message = { id: Math.random(), text };
    return {
      type: actionTypes.ADD_MESSAGE,
      message
    };
  },
  removeMessage: function(id) {
    return {
      type: actionTypes.REMOVE_MESSAGE,
      idToRemove: id
    };
  }
};

export { reducer as default, actionTypes, actions };
