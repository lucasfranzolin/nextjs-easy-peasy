import { useStoreState, useStoreActions } from "easy-peasy"

function Home() {
  const counter = useStoreState((state) => state.home.count)
  const increment = useStoreActions((actions) => actions.home.increment)
  const decrement = useStoreActions((actions) => actions.home.decrement)
  const resetCounter = useStoreActions((actions) => actions.home.reset)

  return (
    <>
      <h1>Count = {counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>
    </>
  )
}

export default Home
