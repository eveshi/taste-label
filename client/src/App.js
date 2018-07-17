import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import Charts from './containers/charts/charts';

const App = () => (
  <Layouts>
    <BrowserRouter>
      <Route path="/" component={Charts} />
    </BrowserRouter>
  </Layouts>
);

export default App;
