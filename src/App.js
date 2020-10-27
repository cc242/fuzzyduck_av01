import React, {useEffect, useMemo, useReducer} from 'react';
import {DATA_FEATURED, DATA_LOADED, DATA_STORIES, DATA_NAMES, SET_DATA} from "./reducers/types";
import {AppContext} from "./context/AppContext";
import {Switch, Route} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {getAppData} from "./utils/getAppData";
import appReducer from "./reducers/AppReducer";
import HomePage from "./pages/HomePage/HomePage";
import Names from "./pages/Names/Names";
import Stories from "./pages/Stories/Stories";
import './App.scss';
import Header from "./pages/Components/Header/Header";

function App() {
  const [state, dispatch] = useReducer(appReducer, {});
  const providerValue = useMemo(() => ({state, dispatch}), [state, dispatch]);
  const history = useHistory();
  useEffect(() => {
    async function get() {
      /**
       * Get medal stories
       */
      let medals= await getAppData(`medal_story`);
      dispatch({type: DATA_STORIES, data: medals});
      /**
       * get memorial names
       */
      let names = await getAppData(`pages/73&_embed&per_page=1000`);
      dispatch({type: DATA_NAMES, data: names});
      /**
       * Get featured stories
       */
      let featured_stories = await getAppData(`featured_story`);
      dispatch({type: DATA_FEATURED, data: featured_stories});
    }
    get().then(()=> {
      dispatch({type: DATA_LOADED});
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
            <Route path="/stories" component={Stories} exact />
          </Switch>
        </AppContext.Provider>
      </div>
  );
}

export default App;
