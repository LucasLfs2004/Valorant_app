import { NEW_TITLE, AGENT_SELECTED } from "./actionTypes"

//Action Creator
export function changeTitle(title) {
  return {
    type: NEW_TITLE,
    payload: title
  }
}

export function changeAgentSelected(agentSelected) {
  return {
    type: AGENT_SELECTED,
    payload: agentSelected
  }
}