import React from 'react'
import { css } from 'emotion'


const ScrollView = props => {
    return <div className={container()}>{props.children}</div>
}

const container = () => css`
    overflow-y: 'scroll';
    background-color: whiteSmoke;
    hight: 100vh;
`

export default ScrollView