import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
// router
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// css
import './App.css';


// components
import Header from './components/header/Header'
import Main from './components/main/Main'
import AlleNGOer from './components/page1/AlleNGOer'
import TidligereSoegte from './components/page2/TidligereSoegte'
import StoettetFoer from './components/page3/StoettetFoer'
import DetailedList from './components/detailedList/DetailedList'
import DetailsView from './components/details/DetailsView'
import Frontpage from './components/page0/Frontpage'

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
          <Main>
            <Switch>
              <Route path="/alle-ngoer" component={AlleNGOer}/>
              <Route path="/tidligere-søgte" component={TidligereSoegte}/>
              <Route path="/støttet-før" component={StoettetFoer}/>
              <Route path="/detailed-list/:id" component={DetailedList}/>
              <Route path="/details/:id" component={DetailsView}/>
              <Route path="/" component={Frontpage} /> 
            </Switch>
          </Main>
      </div>
    </Router>
  );
}

// export default App;
export default () => (<Provider store={store}><App/></Provider>);