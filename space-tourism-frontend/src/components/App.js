import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>

        <Route exact path="/">
          <Home />  
        </Route>

      </Switch>

      <h1>Hello from React</h1>

    </div>
  );
}

export default App;
