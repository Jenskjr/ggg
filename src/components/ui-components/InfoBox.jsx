import React from 'react';
import { css } from 'emotion';

const InfoBox = props => {

    const timeDelay = delay => {
        setTimeout(() => props.setOpen(false), delay)
    }

    return (
        <div className={container()}>
            {props.open && 
                <div className={`modal ${props.type}`}>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>}
            {timeDelay(10000)}
        </div>
    )
}

const container = () => css`
    @keyframes slideInFromTop {
        0% {
        transform: translateY(-100%);
        }
        100% {
        transform: translateY(0);
        }
    }

    .modal {
        position: fixed; 
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        overflow: auto; 
        background-color: blue; 
        padding: 1rem;
        animation: 1s ease-out 0s 1 slideInFromTop;
        color: grey;
    }

    .success {
        background-color: lightgreen;
    }
    
    .warning {
        background-color: lightyellow;
    }

    .error {
        background-color: #fef3f4;
    }
`


export default InfoBox;
