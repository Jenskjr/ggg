import React, {
  useState,
  useEffect
} from 'react';
import {
  Provider
} from 'react-redux';
import store from './store/store';
// router
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
// css
import './App.css';
// components
import AddToHomeScreen from './components/ui-components/AddToHomeScreen';
import { css } from "emotion";

// components
import Header from './components/header/Header'
import Main from './components/main/Main'
import AlleNGOer from './components/page1/AlleNGOer'
import TidligereSoegte from './components/page2/DevGoals'
import StoettetFoer from './components/page3/Categories'
import DetailedList from './components/detailedList/DetailedList'
import DetailsView from './components/details/DetailsView'
import Frontpage from './components/page0/Frontpage'

function App() {

  const [showInstallMessage, setShowInstallMessage] = useState(false);

  useEffect(() => {
    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      setShowInstallMessage(true);
    }
  }, [])

  // Detects if device is on iOS 
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  return ( <div className={container()}>
      <HashRouter >
        <div className = "App" >
          <Header />
          <Main>
            <Switch >
              <Route path = "/alle-ngoer" component = {AlleNGOer}/> 
              <Route path = "/tidligere-søgte" component = {TidligereSoegte}/> 
              <Route path = "/støttet-før" component = {StoettetFoer}/> 
              <Route path = "/detailed-list/:id" component = {DetailedList}/> 
              <Route path = "/details/:organizationId/:id" component = {DetailsView}/> 
              <Route path = "/" component = {Frontpage}/>  
              </Switch > 
            </Main>
          </div > 
        </HashRouter> {showInstallMessage && < AddToHomeScreen />
    } 
  </div>
  );}

const container = () => css`
  background-color: whiteSmoke;
`

// export default App;
export default () => ( <Provider store = { store } > <App /> </Provider>);