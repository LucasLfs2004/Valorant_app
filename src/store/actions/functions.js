import { NEW_TITLE, AGENT_SELECTED, AGENT, AGENTS } from "./actionTypes"

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

export function setAgent(agent) {
  return {
    type: AGENT,
    payload: agent
  }
}

export function setAgents(agents) {
  return {
    type: AGENTS,
    payload: agents
  }
}