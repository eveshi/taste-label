import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ToolBar from './components/ToolBar/ToolBar';
import Charts from './containers/charts/charts';
import classes from './App.css';

const App = () => (
  <div className={classes.page}>
    <ToolBar>
      <BrowserRouter>
        <Route path="/" component={Charts} />
      </BrowserRouter>
      <p>
        test
      </p>
    </ToolBar>
  </div>
);

export default App;
