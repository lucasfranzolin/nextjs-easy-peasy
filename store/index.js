import { createStore } from "easy-peasy"

import home from "./home"
import count from "./count"

const model = {
  home,
  ...count,
}

export default model

export function initializeStore(initialState) {
  return createStore(model, initialState)
}
