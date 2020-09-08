/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 11:22:57 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 15:04:08
 */
import React, { useState, createContext, useContext } from 'react';
import { Button, Typography, Divider  } from 'antd';
const { Title } = Typography;
const CountContext = createContext();

function useContextDemo() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Title>二、useContext演示</Title>
            <p>通过useContext共享上下文，实现数据共享</p>
            <Title level={3}>You Clicked {count} times</Title>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
            <Divider />
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </>
    )

}

function Counter() {
    const count = useContext(CountContext);
    return <Title level={3}>这是子组件的同步显示:{count}</Title>
}
export default useContextDemo;