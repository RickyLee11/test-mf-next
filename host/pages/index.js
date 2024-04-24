import useStore from "../zustand/store";

export default function App() {
    const [count, increment, clear] = useStore((state) => [state.count, state.increment, state.clear]);
    return (
    <>
        <div>i am host</div>
        <div>count: host {count}</div>
        <button onClick={increment}>host increment</button>
        <button onClick={clear}>host clear</button>
    </>
    )
  }