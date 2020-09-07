/*
 * @Author: Chauncey 
 * @Date: 2020-09-07 10:00:41 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-07 11:07:56
 */

/* 自定义hook，实时获取窗口大小 */

import  { useState, useCallback, useEffect } from 'react'


function useWinSize() {

    const [winSize, setWinSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(() => {
        setWinSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
        console.log("变化了");
    },[])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    },[onResize])

    return winSize
}





export default useWinSize