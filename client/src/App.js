import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import Home from './containers/Home/Home';
import AlbumDetails from './containers/AlbumDetails/AlbumDetails';
import UserSign from './containers/UserSign/UserSign';
import UserDetails from './containers/UserDetails/UserDetails';
import UserAllRates from './containers/UserAllRates/UserAllRates';
import UserAllLabels from './containers/UserAllLabels/UserAllLabels';

const App = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/album" component={AlbumDetails} />
      <Route path="/signin" component={UserSign} />
      <Switch>
        <Route path="/user/rates" component={UserAllRates} />
        <Route path="/user/labels" component={UserAllLabels} />
        <Route path="/user" component={UserDetails} />
      </Switch>
      <Route path="/" exact component={Home} />
    </Layouts>
  </BrowserRouter>
);

export default App;
