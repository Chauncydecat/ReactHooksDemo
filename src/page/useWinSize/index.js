/*
 * @Author: Chauncey 
 * @Date: 2020-09-07 10:09:36 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-07 10:50:02
 */

import React from 'react'
import useWinSize from './useWinSize';


function MyHook() {

    const size = useWinSize()
    return (
        <>
            <h2>自定义Hook演示</h2>
            <p>实时获取页面大小</p>
            <h2>页面size：{size.width}*{size.height}</h2>
        </>
    )
}

export default MyHook;