import React, { useState } from "react";
import { css } from "emotion";
import { connect } from "react-redux";
import { setTabIndex } from "../../actions/actions.js";

const TabView = props => {
  const handleTabClick = tabIndex => {
    props.setTabIndex(tabIndex);
  };

  return (
    <div className={container()}>
      <div className="tabs">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${props.tabIndex === index && "active"}`}
            onClick={() => {
              handleTabClick(index);
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="content">{props.content[props.tabIndex]}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tabIndex: state.tabIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTabIndex: tabIndex => dispatch(setTabIndex(tabIndex))
  };
};

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
`;

export default connect(mapStateToProps, mapDispatchToProps)(TabView);
