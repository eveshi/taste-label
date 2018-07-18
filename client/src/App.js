import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import Charts from './containers/charts/charts';

const App = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/" component={Charts} />
    </Layouts>
  </BrowserRouter>

);

export default App;
