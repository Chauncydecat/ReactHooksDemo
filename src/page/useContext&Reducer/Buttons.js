/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 13:44:43 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-04 14:33:54
 */
import React, { useContext } from 'react'
import { ColorContext } from './color';

function Buttons(){

    const {dispatch} = useContext(ColorContext);
    return(
        <div>
            <button onClick={()=>dispatch({type:"UPDATE_COLOR",color:'red'})} >红色</button>
            <button onClick={()=>dispatch({type:"UPDATE_COLOR",color:'yellow'})}>黄色</button>
            <button onClick={()=>dispatch({type:"UPDATE_COLOR",color:'blue'})}>蓝色</button>
        </div>
    )
}
export default Buttons;