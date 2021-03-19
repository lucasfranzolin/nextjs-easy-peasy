import { useStoreState, useStoreActions } from "easy-peasy"

function Index() {
  const counter = useStoreState((state) => state.count)
  const increment = useStoreActions((actions) => actions.increment)
  const decrement = useStoreActions((actions) => actions.decrement)
  const resetCounter = useStoreActions((actions) => actions.reset)

  return (
    <>
      <h1>Count = {counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>
    </>
  )
}

export default Index
