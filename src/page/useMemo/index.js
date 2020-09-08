import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
import { Typography, Divider } from 'antd';
const { Title } = Typography;
function UseMomoDemo() {
    const [chauncey, setChauncey] = useState('Chauncey在玩游戏');
    const [renne, setRenne] = useState('Renne在看电视');

    return (
        <>
            <Title>五、UseMomo实例演示</Title>
            <p>主要解决父组件每次变化子组件都会渲染并执行方法的问题</p>
            <Button type="primary" onClick={() => { setChauncey(new Date().getTime() + ',Chauncey去吃饭了') }}>Chauncey</Button>
            <Button style={{marginLeft:'20px'}} type="primary" onClick={() => { setRenne(new Date().getTime() + ',Renne去吃饭了') }}>Renne</Button>
            <ChildCom chauncey={chauncey} renne={renne}>{renne}</ChildCom>
        </>
    )
}

function ChildCom({ chauncey, children }) {

    function confirmChauncey(chauncey) {
        console.log("Chauncey玩的很投入");
        return chauncey + '会时不时看一下Renne'
    }

    /*如果不使用useMemo而是直接赋值 const ChaunceyNow = confirmChauncey(chauncey);,则每次子组件渲染都会执行confirmChauncey*/
    const ChaunceyNow = useMemo(() => confirmChauncey(chauncey), [chauncey])

    return (
        <>
            <Divider />
            <Title level={4}>{ChaunceyNow}</Title>
            <Divider />
            <Title level={4}>{children}</Title>
        </>
    )

}

export default UseMomoDemo;