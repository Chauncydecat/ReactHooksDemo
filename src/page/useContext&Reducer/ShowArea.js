/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 10:02:05 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-04 14:34:22
 */
import React,{useContext} from 'react';
import {ColorContext} from './color';

function ShowArea(){

    const {color} = useContext(ColorContext);;
    return (
        <h2 style={{color:color}}>
            字体颜色为{color}
        </h2>
    )
}
export default ShowArea;