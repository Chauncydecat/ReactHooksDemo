/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 11:22:57 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-04 13:28:28
 */
import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function useContextDemo() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>useContext演示</h1>
            <p>通过useContext共享上下文，实现数据共享</p>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>

            <CountContext.Provider value={count}>
            <Counter />
            </CountContext.Provider>
        </>
    )

}

function Counter() {
    const count = useContext(CountContext);
    return <h2>这是子组件的显示:{count}</h2>
}
export default useContextDemo;