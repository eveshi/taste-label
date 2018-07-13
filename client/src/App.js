import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Charts from './containers/charts/charts';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Charts} />
  </BrowserRouter>
);

export default App;
