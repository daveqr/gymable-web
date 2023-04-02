import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import People from './components/People';
import Cars from './components/Cars';
import Boats from './components/Boats';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/people" component={People} />
        <Route exact path="/cars" component={Cars} />
        <Route exact path="/cars/boats" component={Boats} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
