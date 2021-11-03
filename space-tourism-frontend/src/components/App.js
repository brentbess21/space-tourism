import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Home from './Home';
import Destinations from './destinations/Destinations';


function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Home />  
        </Route>

        <Route>
          <Destinations path="/destinations" />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
