import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import classes from './NoBorderButton.css';

const NoBorderButton = (props) => {
  const {
    children,
    onClick,
  } = props;

  return (
    <button
      className={classes.noBorderButton}
      type="button"
      onClick={onClick}
    >
      { children }
    </button>
  );
};

NoBorderButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NoBorderButton;
