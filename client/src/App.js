import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import Home from './containers/Home/Home';

const App = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/" component={Home} />
    </Layouts>
  </BrowserRouter>

);

export default App;
