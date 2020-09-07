/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 09:49:30 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-04 13:11:15
 */

import React from 'react';
import Example3 from './Example03';
import Example3X from './Exampale03X';
//import Example4 from './Example04';
function useEffectDemo() {

    return (
        <>
            <h1>
                useEffect演示
            </h1>
            <p>
                简单的计数器，
                通过useEffect替代componentDidMount和componentDidUpdate
                </p>
            <h2>
                生命周期方式实现
            </h2>
            <Example3 />
            <h2>
                hooks方式实现
            </h2>
            <Example3X />
            

        </>
    )
}

export default useEffectDemo;


