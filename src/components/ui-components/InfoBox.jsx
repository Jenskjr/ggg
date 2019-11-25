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
                    <div className="content">
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                    </div>
                </div>}
            {timeDelay(10000)}
        </div>
    )
}

const container = () => css`
    @keyframes slideInFromLeft {
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
        background-color: white; 
        border: 1px solid lightgrey;
        animation: 1s ease-out 0s 1 slideInFromLeft;
        color: grey;

        .content {
            padding: 1rem; 
        }
    }

    .success {
        color: green;
    }
    
    .warning {
        color: yellow;
    }

    .error {
        color: red;
    }
`


export default InfoBox;
