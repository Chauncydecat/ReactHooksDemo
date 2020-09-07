import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import useEffectDemo from './useEffect';
import useContextDemo from './useContext';
import useReducerDemo from './useReducer';
import useContextAndReducerDemo from './useContext&Reducer'
import useMemoDemo from './useMemo'
import useRefDemo from './useRef'
import myHook from './useWinSize'
function HookDemos() {
    return (
        <>
            <h1>React Hooks 实例演示</h1>
            <p>需要同时打开控制台</p>
            <Router>
                <ul>
                    <li><Link to="/useEffect">useEffect</Link></li>
                    <li><Link to="/useContext">useContext</Link></li>
                    <li><Link to="/useReducer">useReducer</Link></li>
                    <li><Link to="/useReducerAndUseContext">useContext and useReducer</Link></li>
                    <li><Link to="/useMemo">useMemo</Link></li>
                    <li><Link to="/useRef">useRef</Link></li>
                    <li><Link to="/useWinSize">useWinSize</Link></li>
                </ul>
                <Route path='/useEffect' component={useEffectDemo}></Route>
                <Route path='/useContext' component={useContextDemo}></Route>
                <Route path='/useReducer' component={useReducerDemo}></Route>
                <Route path='/useReducerAndUseContext' component={useContextAndReducerDemo}></Route>
                <Route path='/useMemo' component={useMemoDemo}></Route>
                <Route path='/useRef' component={useRefDemo}></Route>
                <Route path="/useWinSize" component={myHook}></Route>
            </Router>
        </>
    )
}
export default HookDemos;
