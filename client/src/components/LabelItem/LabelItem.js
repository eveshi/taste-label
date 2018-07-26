import React from 'react';
import PropTypes from 'prop-types';
import classes from './LabelItem.css';

const LabelItem = (props) => {
  const {
    labelItem,
    onClick,
  } = props;

  return (
    <div className={classes.labelItem}>
      <p className={classes.labelItem__item}>
        {labelItem}
      </p>
      <button
        className={classes.labelItem__close}
        type="button"
        onClick={onClick}
      >
        &Chi;
      </button>
    </div>
  );
};

LabelItem.propTypes = {
  labelItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LabelItem;
