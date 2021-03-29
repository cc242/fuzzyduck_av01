import React, {useEffect, useMemo, useReducer} from 'react';
import {DATA_FEATURED, DATA_LOADED, DATA_STORIES, DATA_NAMES, SET_DATA, DATA_MEDALS} from "./reducers/types";
import {AppContext} from "./context/AppContext";
import {Switch, Route, Link} from "react-router-dom";
import {getAppData, getPeople} from "./utils/getAppData";
import appReducer from "./reducers/AppReducer";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./pages/Components/Header/Header";
import Names from "./pages/Names/Names";
import Memorial from "./pages/Memorial/Memorial";
import FeaturedStories from "./pages/FeaturedStories/FeaturedStories";
import './App.scss';
import Story from "./pages/Story/Story";
import {useIdleTimer} from "react-idle-timer";
// import cachedData from './data';

function App() {
  const [state, dispatch] = useReducer(appReducer, {});
  const providerValue = useMemo(() => ({state, dispatch}), [state, dispatch]);

  const handleOnIdle = event => {
    //  history.push(`/menu/${state.home_page.id}`)
    window.location.href = `http://ducknest.co.uk/doncaster/av01/`;
  }

  const handleOnActive = event => {
    console.log('user is active', event)
    console.log('time remaining', getRemainingTime())
  }

  const handleOnAction = (e) => {
    console.log('user did something', e)
  }
  const { getRemainingTime, getLastActiveTime, reset } = useIdleTimer({
    timeout: 10000,
    // timeout: 120000,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500
  })

  useEffect(() => {
    async function get() {


      async function getNames () {
        /**
         * This gets the data from the db, replaced with local file 'data.js'
         */
        /*let allNames = [];
        for (let i=0; i<13; i++) {
          const files = await getAppData(`person&page=${i+1}&per_page=100`);
          allNames = [...allNames, ...files];
        }*/
        // dispatch({type: DATA_NAMES, data: allNames});
        //dispatch({type: DATA_NAMES, data: cachedData.reverse()});
        // console.log('', allNames);
        console.log('new');
        const people = await getPeople();
        dispatch({type: DATA_NAMES, data: people['people']});
        /**
         * Get medals
         */
        let medals = await getAppData(`medal`);
        dispatch({type: DATA_MEDALS, data: medals});
        /**
         * Get featured stories
         */
        let featured_stories = await getAppData(`featured_story`);
        dispatch({type: DATA_FEATURED, data: featured_stories});
        dispatch({type: DATA_LOADED});
      }

      getNames();
    }
    get().then(()=> {
      console.log('loaded');

    })
  }, []);

  return (
      <div className="layout">
        <Header/>
        <AppContext.Provider value={providerValue}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/app.html" component={HomePage} exact />
            <Route path="/names" component={Names} exact />
            <Route path="/featuredstories" component={FeaturedStories} exact />
            <Route path="/memorial" component={Memorial} />
            <Route path="/story/:id" component={Story} />
          </Switch>
        </AppContext.Provider>
      </div>
  );
}

export default App;
