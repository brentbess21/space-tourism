import { React, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import data from './../data/data.json'

import Home from './Home';
import Tabs from './destinations/Tabs';
import Destination from './destinations/Destination';
import Destinations from './destinations/Destinations';
import CrewMember from './crew/CrewMember';

const destination_data = JSON.parse(JSON.stringify(data.destinations));


function App() {
  
  const [ destinations, setDestinations ] = useState(destination_data)

  console.log("From app", destinations)
  return (
    <div className="App">
      <Switch>

        <Route path='/crew'>
          <CrewMember />
        </Route>

        <Route path='/destinations/:destinationName'>
          <Destination destinations={destinations} />
        </Route>

        <Route path="/destinations">
          <Destinations />
        </Route>

        <Route exact path="/">
          <Home />  
        </Route>

      </Switch>

    </div>
  );
}

export default App;
