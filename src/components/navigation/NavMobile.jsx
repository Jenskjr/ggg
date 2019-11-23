import React, { useState } from 'react';
// css
import { css } from 'emotion';
import { connect } from 'react-redux';

const Navigation = props => {
    
    return (
      <div className={container()}>
<div className="nav-item" onClick={() => console.log("Log in")}>{props.lang.login}</div>
        <div className="nav-item" onClick={() => props.changeLanguage()}>
          
          {props.english ? "Dansk" : "English"}
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    lang: state.lang,
    english: state.english
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: () => dispatch({ type: 'CHANGELANGUAGE' }),
  }
};

const container = () => css`
  @keyframes slideInFromTop {
    0% {
    transform: translateY(-100%);
    }
    100% {
    transform: translateY(0);
    }
  }  

  text-align: center;
  background-color: white;
  // animation: 1s ease-out 0s 1 slideInFromTop;

  .nav-item {
    border-bottom: 1px solid lightgrey;
    padding: 0.5rem 0;
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);