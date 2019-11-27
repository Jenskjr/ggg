import React from 'react'


const RadioInput = props => {
    
    return <>
        <input 
            type="radio" 
            name={props.name}
            value={props.value}
            checked={props.checked}
            onChange={props.onChange}
        />
        <label>
            {props.title} 
        </label>
    </>   
}

export default RadioInput