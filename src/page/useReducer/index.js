/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 13:15:50 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 15:48:53
 */

import React, { useReducer } from 'react'
import { Button,Typography } from 'antd';
const { Title } = Typography;
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
            <Title>三、useReducer演示</Title>
            <p>通过useReducer共享状态，实现简单计数器</p>
            <Title level={3}>现在的分数是{count}</Title>
            <br />
            <Button type="primary" onClick={() => dispatch("add")}>点我+1</Button>
            <Button type="primary" style={{marginLeft:'20px'}} onClick={() => dispatch("sub")}>点我-1</Button>
        </div>
    );
}

export default useReducerDemo;