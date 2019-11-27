import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../ui-components/Search'
import NavMobile from '../navigation/NavMobile'
// css 
import { css } from 'emotion';
import { MagnifyIcon, MenuIcon, SeatLegroomReducedIcon } from 'mdi-react'

const Header = () => {
    const [nav, setNav] = useState(false);
    const [search, setSearch] = useState(false);

    return (
      <>
      
      <header className={container()}>
        <Link className="link" to="/">
          <img src="/media/logos/logggo.png" alt=""/>
        </Link>
        <div className="title">    
          <Link className="link" to="/">
            Gennem gode gerninger
          </Link>
        </div>
          <MagnifyIcon onClick={() => setSearch(!search)}/> 
          <MenuIcon onClick={() => setNav(!nav)}/>
      </header>
      {search && <Search/>}
      {nav && <NavMobile setNav={setNav}/>}
      </>
      
    ) 
}

const container = () => css`
  display: flex;
  padding: 0.5rem;
  border-bottom: 1px solid lightgrey;

  .title {
    color: grey;
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
  }

  img {
    // border: 1px solid grey; 
    padding:  0 1rem 0 1rem; 
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

  svg {
    color: grey;
    margin-left: auto;
    margin-right: 1rem;
  }
`
 

export default Header;