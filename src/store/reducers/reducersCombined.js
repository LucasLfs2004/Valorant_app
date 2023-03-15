import { NEW_TITLE, AGENT_SELECTED, AGENT, AGENTS } from "../actions/actionTypes"

const initialState = {
  title: "",
  agentSelected: 10,
  agent: {},
  agents: 0
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
    case AGENT:
      return {
        ...state,
        agent: action.payload
      }
    case AGENTS:
      return {
        ...state,
        agents: action.payload
      }
    default:
      return state
  }
}