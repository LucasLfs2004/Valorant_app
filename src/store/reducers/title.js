import { NEW_TITLE } from "../actions/actionTypes"

const initialState = {
  title: ""
}

export default function(state = initialState, action) {
  switch(action.type) {
      case NEW_TITLE:
          return {
              ...state,
              title: action.payload
          }
      default:
          return state
  }
}