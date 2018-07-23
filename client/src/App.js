import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import Home from './containers/Home/Home';
import AlbumDetails from './containers/AlbumDetails/AlbumDetails';

const App = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/album" component={AlbumDetails} />
      <Route path="/" exact component={Home} />
    </Layouts>
  </BrowserRouter>

);

export default App;
