import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../ui-components/Search";
import NavMobile from "../navigation/NavMobile";
import { connect } from "react-redux";
import { setSearch } from "../../actions/actions.js";
// css
import { css } from "emotion";
import { MagnifyIcon, MenuIcon } from "mdi-react";

const Header = props => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className={container()}>
        <Link className="link" to="/">
          <img className="logo" src="./media/logos/logggo.png" alt="" />
        </Link>
        <div className="title">
          <Link className="link" to="/">
            Gennem gode gerninger
          </Link>
        </div>
        <MagnifyIcon
          onClick={() => {
            props.setSearch(!props.search);
            props.resetSearchString();
          }}
        />
        <MenuIcon onClick={() => setNav(!nav)} />
      </header>
      {props.search && <Search />}
      {nav && <NavMobile setNav={setNav} />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearch: event => dispatch(setSearch(event)),
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" })
  };
};

const container = () => css`
  display: flex;
  padding: 0.25rem;
  border-bottom: 1px solid lightgrey;
  background-color: white;

  .title {
    color: grey;
    font-size: 1.2 rem;
    width: 100%;
    text-align: center;
    line-height: 2rem;
  }

  img {
    // border: 1px solid grey;
    padding: 0 1rem 0 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  .search {
    margin-left: auto;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 0;
    margin: 0;
  }

  svg,
  .logo {
    color: grey;
    margin-left: auto;
    margin: 0 0.25rem 0 0.25rem;
    padding: 0.25rem;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
