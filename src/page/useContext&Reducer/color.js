/*
 * @Author: Chauncey 
 * @Date: 2020-09-04 13:56:37 
 * @Last Modified by: Chauncey
 * @Last Modified time: 2020-09-04 14:28:36
 */
import React, { createContext, useReducer } from 'react';

export const UPDATE_COLOR = "UPDATE_COLOR";

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_COLOR": return action.color;
        default: return state;
    }
}

export const ColorContext = createContext({});

export const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}