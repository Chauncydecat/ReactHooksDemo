import React, { useRef, useState, useEffect } from 'react';

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

    return (
        <div>
            <h2>useRef演示</h2>
            <p>可以使用useRef获取DOM元素，并且可以通过useRefu控制DOM的属性和值。</p>
            <input ref={inputEL} tpye="text"></input>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <p>使用useRef保存变量，每次状态修改，同时保存到useRef中</p>
            <input value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
    );
}

export default useRefDemo;