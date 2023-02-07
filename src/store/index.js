import { createStore } from "redux";

const INITIAL_STATE = {
  title: "OLA"
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'NEW_TITLE') {
    return { ...state, title: action.title }
  }
}

const store = createStore(reducer);

export default store;