import React from 'react';
import Child from './Child';
import { useState } from 'react';
import { useContext } from 'react';
import { parentContext, ParentProvider } from './ParentProvider';
import "./Parent.css";

function Parent() {
    const [color1, setColor1] = useState('white');
    const [color2, setColor2] = useState('white');
    const [color3, setColor3] = useState('white');
    const [color4, setColor4] = useState('white');
    const [countBlack, setCountBlack] = useContext(parentContext);

    function changeColor(color, num) {
        if (color === 'white') {
            color = 'black';
        } else {
            color = 'white';
        }

        if (num === 1) {
            setColor1(color);
        } else if (num === 2) {
            setColor2(color);
        } else if (num === 3) {
            setColor3(color);
        } else if (num === 4) {
            setColor4(color);
        }
        
        setCountBlack(color === 'black' ? countBlack + 1 : countBlack - 1);
    }

    return (
        <div>
            <div className="header"><h1>Count: {countBlack}</h1></div>
            <div className='container'>
                <div>
                    <Child color={color1} setColor={() => { changeColor(color1, 1) }}></Child>
                    <Child color={color2} setColor={() => { changeColor(color2, 2) }}></Child>
                    <Child color={color3} setColor={() => { changeColor(color3, 3) }}></Child>
                    <Child color={color4} setColor={() => { changeColor(color4, 4) }}></Child>
                </div>
            </div>
        </div>
    );
}
export default Parent;