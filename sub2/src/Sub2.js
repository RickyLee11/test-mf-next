import React from 'react';
import useStore from './store';

function Sub2 () {
    const { count, increase } = useStore();

    return (
        <div className='sub2'>
            <button onClick={increase}>Increase Sub2 count</button>
            <h1>Sub2 - {count} </h1>
        </div>
    )
}

export default Sub2;