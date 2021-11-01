import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Home from './Home';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Home />  
        </Route>

      </Switch>

    </div>
  );
}

export default App;
