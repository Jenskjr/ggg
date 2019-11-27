import React from 'react'
import { css } from 'emotion';
import { Link } from 'react-router-dom';

const ListItem = props => {
    return (
        <div style={{height: `${props.height ? props.height : ""}`}}className={container(props)}>
             <Link className="content" to={`/${props.link}/${props.contentId}`}>
                <div className="left"><img src={props.left} alt=""/></div>
                <div className="center">{props.center}</div>
            </Link>
            {props.right && <div className="right">
                <a href="http://google.dk" larget="_blank">
                    <img src={props.right} alt=""/>
                </a>
            </div>}
        </div>
    )
}

const container = props => css`
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    margin-bottom: -1px;
    display: flex;

    a {
        text-decoration: none;
        color: black;
    }

    .content {
        display: flex;
        align-items: center;
    }

    .left {
        padding: 1rem;
        width: 5rem;
        img {
            max-height: 100%;
            max-width: 90%;    
        }
    }

    .center {
        padding: 1rem;
    }

    .right {
        width: 5rem;
        height: 4rem;
        img {
            max-height: 4rem;
            max-width: 90%;    
        }
    }
`;

export default ListItem