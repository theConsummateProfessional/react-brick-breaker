import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

export default function Paddle() {
    const {x} = useMousePosition();

    let position = (x) => {
        if(x - 475 > 1000) {
            return 1000;
        } else if (x - 475 < 0) {
            return 0;
        } else {
            console.log(-1*(window.screen.width - x*2));
            console.log(x - 475);
            return x - 475;
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