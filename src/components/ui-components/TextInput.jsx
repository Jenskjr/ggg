import React from 'react';
import { css } from 'emotion'; 

const TextInput = props => {
    return (
        <div className={container()}>
        <input
            style={{width: `${props.width ? props.width : "100%"}`}} 
            name={props.name}
            type="text" 
            placeholder={`${props.placeholder ? props.placeholder : "Indtast dit indhold"}`}
            value={props.value || ""}
            onChange={props.handleChange}    
        />
        </div>
    )
}

const container = () => css`    
    input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.5rem;
        border-radius: 2px; 
        border: 1px solid lightgrey;
        color: grey;
    }

`

export default TextInput;