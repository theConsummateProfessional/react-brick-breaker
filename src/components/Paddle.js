import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

export default function Paddle() {
    const {x} = useMousePosition();

    let position = (x) => {
        console.log("running")
        if(x - 200 > 1000) {
            return 1000;
        } else if (x - 200 < 0) {
            return 0;
        } else {
            return x - 200;
        }
    }

    return (
        <div style={{
            'position': 'absolute',
            'height': '25px',
            'width' : '100px',
            'backgroundColor': '#555',
            'top': '94%',
            'marginLeft': position(x)
        }}></div>
    )
}