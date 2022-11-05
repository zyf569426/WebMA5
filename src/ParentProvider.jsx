import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const parentContext = createContext();


export function ParentProvider(props) {

    const [countBlack, setCountBlack] = useState(0);

    return (
        <parentContext.Provider value={[countBlack, setCountBlack]}>
            {props.children}
        </parentContext.Provider>
    )

}