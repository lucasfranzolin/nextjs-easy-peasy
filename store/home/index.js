import { action } from "easy-peasy"

const initialState = {
  count: 0,
}

export default {
  ...initialState,
  increment: action((state) => {
    state.count++
  }),
  decrement: action((state) => {
    state.count--
  }),
  reset: action((state) => {
    state.count = 0
  }),
}
