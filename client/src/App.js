import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ToolBar from './components/ToolBar/ToolBar';
import Charts from './containers/charts/charts';
import './App.css';

const App = () => (
  <ToolBar>
    <BrowserRouter>
      <Route path="/" component={Charts} />
    </BrowserRouter>
  </ToolBar>
);

export default App;
