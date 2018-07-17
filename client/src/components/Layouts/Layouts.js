import React from 'react';
import PropTypes from 'prop-types';
import ToolBar from '../ToolBar/ToolBar';
import classes from './Layouts.css';

const Layouts = (props) => {
  const { children } = props;

  return (
    <div className={classes.layouts}>
      <ToolBar />
      {children}
    </div>
  );
};

Layouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layouts;
