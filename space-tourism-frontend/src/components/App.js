import { React, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import data from './../data/data.json'

import Home from './Home';
import Destination from './destinations/Destination';
import Destinations from './destinations/Destinations';
import Crew from './crew/Crew';
import CrewMember from './crew/CrewMember';
import Technology from './technology/Technology';

const destination_data = JSON.parse(JSON.stringify(data.destinations));
const crew_data = JSON.parse(JSON.stringify(data.crew));


function App() {
  
  const [ destinations, setDestinations ] = useState(destination_data);
  const [ crew, setCrew ] = useState(crew_data);

  return (
    <div className="App">
      <Switch>

        <Route path='/technology'>
          <Technology />
        </Route>

        <Route path='/crew/:crewRole'>
          <CrewMember crew={crew} />
        </Route>

        <Route path='/crew'>
          <Crew />
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
