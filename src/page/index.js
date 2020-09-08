/*
 * @Author: Chauncey 
 * @Date: 2020-09-08 09:21:05 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 17:56:39
 */
import React from 'react';
import useEffectDemo from './useEffect';
import useContextDemo from './useContext';
import useReducerDemo from './useReducer';
import useContextAndReducerDemo from './useContext&Reducer'
import useMemoDemo from './useMemo'
import useRefDemo from './useRef'
import myHook from './useWinSize'
import { Layout, Anchor, Divider } from 'antd';
import '../asserts/css/page.css'
import PageHeader from './pageHeader'

const { Link } = Anchor;
const { Content, Sider } = Layout;
function HookDemos() {

    const height = window.innerHeight;

    

    return (
        <>
            <Layout >
                <Sider theme='light' >
                    <div className="PageSider" onClick={() => console.log(document.getElementById("content"))}>
                        <Anchor  getContainer={() => document.getElementById("content")}>
                            <Link href="#useEffectDemo" title="useEffect" />
                            <Link href="#useContextDemo" title="useContext" />
                            <Link href="#useReducerDemo" title="useReducer" />
                            <Link href="#useReducerAndUseContext" title="useReducer&UseContext" />
                            <Link href="#useMemoDemo" title="useMemo" />
                            <Link href="#useRefDemo" title="useRef" />
                            <Link href="#useWinSize" title="useWinSize" />
                        </Anchor>
                    </div>

                </Sider>
                {/* <Layout > */}
                <Content style={{ height: height }}>
                    <PageHeader />
                    <div className="PageContent" >
                        <div id="content" className="Pagecontent content" >
                            <div id="useEffectDemo">{useEffectDemo()}</div>
                            <Divider />
                            <Divider />
                            <div id="useContextDemo">{useContextDemo()}</div>
                            <Divider />
                            <Divider />
                            <div id="useReducerDemo">{useReducerDemo()}</div>
                            <Divider />
                            <Divider />
                            <div id="useContextAndReducerDemo">{useContextAndReducerDemo()}</div>
                            <Divider />
                            <Divider />
                            <div id="useMemoDemo">{useMemoDemo()}</div>
                            <Divider />
                            <Divider />
                            <div id="useRefDemo">{useRefDemo()}</div>
                            <Divider />
                            <Divider />
                            <div id="useWinSize">{myHook()} </div>
                            <Divider />
                            <Divider orientation="right">To Be Continued...</Divider>
                            {/* <Router>
                                    <Route path='/#useEffect' component={useEffectDemo}></Route>
                                    <Route path='/#useContext' component={useContextDemo}></Route>
                                    <Route path='/useReducer' component={useReducerDemo}></Route>
                                    <Route path='/useReducerAndUseContext' component={useContextAndReducerDemo}></Route>
                                    <Route path='/useMemo' component={useMemoDemo}></Route>
                                    <Route path='/useRef' component={useRefDemo}></Route>
                                    <Route path="/useWinSize" component={myHook}></Route>
                                </Router> */}
                        </div>

                    </div>
                </Content>

                {/* </Layout> */}
            </Layout>

        </>
    )
}
export default HookDemos;
