import React from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { setSearchString } from "../../actions/actions.js";

const Search = props => {
  return (
    <div className={container()}>
      <input
        type="text"
        value={props.searchString}
        placeholder={props.lang && props.lang.typeYourSearch}
        onChange={event => props.setSearchString(event)}
      />
    </div>
  );
};

const container = () => css`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;

  input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 1rem 0.5rem;
    border: 1px solid lightgrey;
    font-size: 1.2rem;
  }
`;

const mapStateToProps = state => {
  return {
    lang: state.lang,
    searchString: state.searchString
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchString: event => dispatch(setSearchString(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
