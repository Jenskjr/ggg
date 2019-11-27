import React from 'react'
import { css } from 'emotion';

const ListView = props => {
    return <div className={container()}>{props.children}</div>
}

export default ListView

const container = () => css`
  
`;