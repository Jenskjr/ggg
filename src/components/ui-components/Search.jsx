import React from 'react';
import { css } from 'emotion';

const Search = () => {

    return (
        <div className={container()}>
            <input type="text" placeholder="Indtast din søgning ..."/>
        </div>
    )
}

const container = () => css`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;

    input[type=text] {
        margin-left: auto;
        margin-right: auto;
        width: 100%; 
        padding: 0.5rem;
        border: 2px solid lightgrey;
        border-radius: 4px
        
      }
`

export default Search