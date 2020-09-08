/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 10:02:05 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 14:09:12
 */
import React, { useContext } from 'react';
import { ColorContext } from './color';
import { Typography } from 'antd';
const { Title } = Typography;
function ShowArea() {

    const style = { backgroundColor: '#d9d9d9', width: '400px', height: '100px', marginBottom: '5px' }
    const { color } = useContext(ColorContext);;
    return (
        <div style={style}>
            <Title level={3} style={{ color: color }}>
                字体颜色为{color}
            </Title>
        </div>

    )
}
export default ShowArea;