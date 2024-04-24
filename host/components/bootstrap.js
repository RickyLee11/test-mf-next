import useStore from "../zustand/store";
import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('sub/button'), { ssr: false});


export default function Home() {
    const [count, increment, clear] = useStore((state) => [state.count, state.increment, state.clear]);
    return (
    <>
        <RemoteButton />
        <div>i am host</div>
        <div>count: host {count}</div>
        <button onClick={increment}>host increment</button>
        <button onClick={clear}>host clear</button>
    </>
    )
  }