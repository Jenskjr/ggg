import React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';

const Search = props => {

    return (
        <div className={container()}>
            <input type="text" placeholder={props.lang.typeYourSearch}/>
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
        border: 1px solid lightgrey;
      }
`

const mapStateToProps = state => {
    return {
        lang: state.lang
    };
};

export default connect(mapStateToProps)(Search)