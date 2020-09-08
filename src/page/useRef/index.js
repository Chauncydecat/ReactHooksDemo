import React, { useRef, useState, useEffect } from 'react';
import { Typography, Divider, Button, Input } from 'antd';
const { Title } = Typography;
function useRefDemo() {

    const inputEL = useRef(null);
    const onButtonClick = () => {
        inputEL.current.value = "Hello,Chauncey!"
        console.log(inputEL);
    }

    const [text,setText] = useState("Hello,Renne!")
    const textRef = useRef()

    useEffect(()=>{
        textRef.current=text;
        console.log('textRef.current:',textRef.current);
    })

    const width = window.innerWidth/2;

    return (
        <div>
            <Title>六、useRef演示</Title>
            <p>可以使用useRef获取DOM元素，并且可以通过useRefu控制DOM的属性和值。</p>
            <input style={{width:width}} ref={inputEL} tpye="text"></input>
            <Button onClick={onButtonClick}>在input上展示文字</Button>
            <Divider />
            <p>使用useRef保存变量，每次状态修改，同时保存到useRef中</p>
            <Input style={{width:width}} value={text} onChange={(e)=>setText(e.target.value)}></Input>
        </div>
    );
}

export default useRefDemo;