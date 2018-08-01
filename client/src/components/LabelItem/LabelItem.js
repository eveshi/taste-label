import React from 'react';
import PropTypes from 'prop-types';
import classes from './LabelItem.css';

const LabelItem = (props) => {
  const {
    labelItem,
    onClick,
    showClose,
  } = props;

  let closeClass = classes.labelItem__close;

  if (showClose === false) {
    closeClass = classes.displayNone;
  }

  return (
    <div className={classes.labelItem}>
      <p className={classes.labelItem__item}>
        {labelItem}
      </p>
      <button
        className={closeClass}
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
  showClose: PropTypes.bool,
};

LabelItem.defaultProps = {
  showClose: true,
};

export default LabelItem;
