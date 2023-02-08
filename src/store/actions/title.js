import { NEW_TITLE } from "./actionTypes"

//Action Creator
export function changeTitle(title) {
  return {
    type: NEW_TITLE,
    payload: title
  }
}