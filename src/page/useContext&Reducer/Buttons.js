/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 13:44:43 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 14:07:47
 */
import React, { useContext } from 'react'
import { ColorContext } from './color';
import { Button } from 'antd';

function Buttons(){
    const style={marginLeft:'20px'}
    const {dispatch} = useContext(ColorContext);
    return(
        <div>
            <Button style={{backgroundColor:'red'}} onClick={()=>dispatch({type:"UPDATE_COLOR",color:'red'})} >红色</Button>
            <Button style={{...style,backgroundColor:'yellow'}} onClick={()=>dispatch({type:"UPDATE_COLOR",color:'yellow'})}>黄色</Button>
            <Button style={{...style,backgroundColor:'blue'}} onClick={()=>dispatch({type:"UPDATE_COLOR",color:'blue'})}>蓝色</Button>
        </div>
    )
}
export default Buttons;