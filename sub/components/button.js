import React from 'react';
import store from 'host/store';

export default function SubButton() {
    const { count, increment } = store();
    return (
    <>
        {count}
        <button>sub button</button>
        <button onClick={increment}>increment</button>
    </>
    )
}