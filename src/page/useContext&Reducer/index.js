/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 13:47:10 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-08 15:49:24
 */

import React from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './color';
import { Typography, Divider } from 'antd';
const { Title } = Typography;
function ContextAndReducer() {

    return (
        <div>
            <Title>四、useContext与useReducer组合演示</Title>
            <p>
                替代Redux:
                </p>
            <p>
                useContext：可访问全局状态，避免一层层的传递状态。这符合Redux其中的一项规则，就是状态全局化，并能统一管理。
                 </p>
            <p>
                useReducer：通过action的传递，更新复杂逻辑的状态，主要是可以实现类似Redux中的Reducer部分，实现业务逻辑的可行性。
            </p>
            <Divider />
            <Color>
                <ShowArea />
                <Buttons />
            </Color>

        </div>
    );
}

export default ContextAndReducer;