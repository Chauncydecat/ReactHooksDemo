/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 13:15:50 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-04 13:29:51
 */

import React, { useReducer } from 'react'

function useReducerDemo() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add': return state + 1;
            case 'sub': return state - 1;
            default: return state;
        }
    }, 0)

    return (
        <div>
            <h1>useReducer演示</h1>
            <p>通过useReducer共享状态，实现简单计数器</p>
            <h2>现在的分数是{count}</h2>
            <button onClick={() => dispatch("add")}>点我+1</button>
            <button onClick={() => dispatch("sub")}>点我-1</button>
        </div>
    );
}

export default useReducerDemo;