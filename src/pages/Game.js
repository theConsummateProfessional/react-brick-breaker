import React from 'react';
import Paddle from '../components/Paddle';

export default function Game() {


    return (
        <>
            <div style={{
                'border': '5px solid black',
                'position': 'absolute',
                'top' : '15%',
                'left': '50%',
                'marginTop': '-50px',
                'marginLeft': '-550px',
                'width': '1100px',
                'height': '400px'
            }}>
                <Paddle />
            </div>
        </>
    )
}