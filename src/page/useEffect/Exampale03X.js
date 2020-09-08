/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 10:08:27 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 13:33:51
 */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Button, Divider } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

function Example3X() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`useEffect=>You Clicked ${count} times`);
        return()=>{
            console.log("==============count触发解绑==============");
        }
    },[count])

    return (
        <>
            <p>You Clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
            <Divider />
            <Title level={3}>
                useEffect解绑替代componentWillMount
            </Title>
            <Router>
                <ul>
                    <li><Link to='/useEffect/newPage01'>前往页面一</Link></li>
                    <li><Link to='/useEffect/newPage02'>前往页面二</Link></li>
                </ul>
                <Route path='/useEffect/newPage01' exact component={Home} />
                <Route path='/useEffect/newPage02' component={NewHome} />
            </Router>
            
        </>
    )
}

function Home() {
    useEffect(() => {
        console.log('Hi!这是页面一，红了');
        return ()=> {
            console.log('======此解绑不会被state变化触发========');
            console.log('解绑页面一：','走啦兄弟！——离开了红色页面');
        }
    },[])
    return <h1 style={{ color: 'red' }}> 页面一</h1>
}

function NewHome() {
    useEffect(() => {
        console.log('Hi!这是页面二，蓝了');
    })
    return <h1 style={{ color: 'blue' }}>页面二</h1>
}

export default Example3X;