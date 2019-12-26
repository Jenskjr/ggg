import React from "react";
// css
import { css } from "emotion";
import { connect } from "react-redux";
import { CloseIcon } from "mdi-react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div className={container()}>
      <div className="content">
        <header>
          <h4>Menu</h4>
          <div className="close-button">
            <CloseIcon onClick={() => props.setNav(false)} />
          </div>
        </header>
        <div className="nav-item" onClick={() => console.log("Log in")}>
          {props.lang && props.lang.login}
        </div>
        <div className="nav-item" onClick={() => props.changeLanguage()}>
          {props.lang && props.english ? "Dansk" : "English"}
        </div>
        <Link to={`/about`}>
          <div className="nav-item" onClick={() => props.setNav(false)}>
            Om Gennem Gode Gerninger
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lang: state.lang,
    english: state.english
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: () => dispatch({ type: "CHANGELANGUAGE" })
  };
};

const container = () => css`
  @keyframes slideInFromTop {
    0% {
      transform: translateX(-100%);
    }
    80% {
      transform: translateX(0);
    }
  }

  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  animation: 1s ease-out 0s 1 slideInFromTop;
  color: grey;
  border: 1px solid lightgrey;
  background-color: whiteSmoke;
  animation: 1s ease-out 0s 1 slideInFromTop;

  .content {
    padding: 2rem;

    header {
      display: flex;
      margin-bottom: 2rem;
      align-items: center;

      h4 {
        margin: 0;
        padding: 0;
      }

      .close-button {
        margin-left: auto;
      }
    }
  }

  .nav-item {
    border-bottom: 1px solid lightgrey;
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: grey;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
