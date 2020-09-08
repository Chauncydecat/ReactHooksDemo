/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 09:49:30 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 15:40:22
 */

import React from 'react';
import Example3 from './Example03';
import Example3X from './Exampale03X';
//import Example4 from './Example04';
import { Typography, Divider } from 'antd';
const { Title } = Typography;
function useEffectDemo() {

    return (
        <>
            <Title>
                一、useEffect演示
            </Title>
            <p>
                简单的计数器，
                通过useEffect替代componentDidMount和componentDidUpdate
                </p>
            <Title level={3}>
                生命周期方式实现
            </Title>
            <Example3 />
            <Divider />
            <Title level={3}>
                hooks方式实现
            </Title>

            <Example3X />


        </>
    )
}

export default useEffectDemo;


