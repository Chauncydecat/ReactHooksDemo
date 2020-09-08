/*
 * @Author: Chauncey 
 * @Date: 2020-09-07 10:09:36 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 15:51:11
 */

import React from 'react'
import useWinSize from './useWinSize';
import { Typography, Divider } from 'antd';
const { Title } = Typography;

function MyHook() {

    const size = useWinSize()
    return (
        <>
            <Title>七、自定义Hook演示</Title>
            <p>实时获取页面大小</p>
            <Divider />
            <Title level={3}>页面size：{size.width}*{size.height}</Title>
        </>
    )
}

export default MyHook;