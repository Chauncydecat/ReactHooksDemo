import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd'
import {CloudDownloadOutlined} from '@ant-design/icons'
export default () => {


    return (
        <div className="PageHeader">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="React Hooks 实例演示"
                subTitle="需要同时打开控制台"
                extra={[
                    <Button key="1" type="link" href="https://github.com/Chauncydecat/ReactHooksDemo" ><CloudDownloadOutlined /> github</Button>,
                ]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Chauncey</Descriptions.Item>
                    <Descriptions.Item label="Association">
                        <a href='/'>zsy.com</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">2020-9-8</Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2020-9-8</Descriptions.Item>
                    <Descriptions.Item label="Remarks">
                        Xinping Road, Wuzhong District, Suzhou, Jiangsu, China
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    );
}