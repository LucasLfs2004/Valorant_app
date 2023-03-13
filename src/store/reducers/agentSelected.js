import { AGENT_SELECTED } from "../actions/actionTypes"

const initialState = {
  agentSelected: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
      case AGENT_SELECTED:
          return {
              ...state,
              agentSelected: action.payload
          }
      default:
          return state
  }
}