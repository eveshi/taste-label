import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import NoBorderButton from '../NoBorderButton/NoBorderButton';
import classes from './SmallTitleBar.css';

const SmallTitleBar = (props) => {
  const {
    title,
  } = props;

  return (
    <div className={classes.smallTitleBar}>
      <p className={classes.smallTitleBar__title}>
        {title}
      </p>
      <NoBorderButton>
        show more
      </NoBorderButton>
    </div>
  );
};

SmallTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SmallTitleBar;
