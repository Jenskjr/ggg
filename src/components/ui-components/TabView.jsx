import React, { useState } from 'react';
import { css } from 'emotion';

const TabView = props => {
    const [tabIndex, setTabIndex] = useState(0);


    const handleTabClick = tabIndex => {
        setTabIndex(tabIndex)
    }
    
    return (
        <div className={container() }>
            <div className="tabs">
                {props.tabs.map((tab, index) => 
                    <div key={index} className={`tab ${tabIndex === index && "active"}` } onClick={() => {handleTabClick(index)}}>{tab}</div>)}
            </div>
            <div className="content">
                {props.content[tabIndex]}
            </div>
        </div>
    )
}

const container = () => css`
    background-color: white;

    .tabs {
        display: flex;
        width: 100%;
        max-width: 100%;
        font-size: 0.8rem;
    }

    .tab {
        padding: 1rem;
        // border: 1px solid grey;
        width: 33.33%;
    }

    .active {
        border-bottom: 2px solid red;
    }
`

export default TabView;

 