import React from 'react';
import PropTypes from 'prop-types';
import classes from './LabelItem.css';

const LabelItem = (props) => {
  const {
    labelItem,
    onClick,
    showClose,
  } = props;

  let closeDisplay = (
    <button
      className={classes.labelItem__close}
      type="button"
      onClick={onClick}
    >
      &Chi;
    </button>
  );

  if (showClose === false) {
    closeDisplay = null;
  }

  return (
    <div className={classes.labelItem}>
      <p className={classes.labelItem__item}>
        {labelItem}
      </p>
      {closeDisplay}
    </div>
  );
};

LabelItem.propTypes = {
  labelItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showClose: PropTypes.bool,
};

LabelItem.defaultProps = {
  showClose: true,
};

export default LabelItem;
