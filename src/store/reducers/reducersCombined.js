import { NEW_TITLE, AGENT_SELECTED } from "../actions/actionTypes"

const initialState = {
  title: "",
  agentSelected: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_TITLE:
      return {
        ...state,
        title: action.payload
      }
    case AGENT_SELECTED:
      return {
        ...state,
        agentSelected: action.payload
      }
    default:
      return state
  }
}