import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import ToolBar from '../ToolBar/ToolBar';
import Footer from '../Footer/Footer';
import classes from './Layouts.css';

const Layouts = (props) => {
  const { children } = props;

  return (
    <div className={classes.layouts}>
      <ToolBar />
      {children}
      <Footer />
    </div>
  );
};

Layouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layouts;
