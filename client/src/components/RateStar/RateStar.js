import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../assets/icon/star';
import classes from './RateStar.css';

const RateStar = (props) => {
  const { onClick } = props;

  return (
    <div className={classes.rateStar}>
      <input
        name="rate"
        className={classes.rateStar__input}
        type="radio"
        id="5"
      />
      <label
        htmlFor="5"
        className={classes.rateStar__label}
        onClick={onClick}
      >
        <Star />
      </label>
      <input
        name="rate"
        className={classes.rateStar__input}
        type="radio"
        id="4"
      />
      <label
        htmlFor="4"
        className={classes.rateStar__label}
        onClick={onClick}
      >
        <Star />
      </label>
      <input
        name="rate"
        className={classes.rateStar__input}
        type="radio"
        id="3"
      />
      <label
        htmlFor="3"
        className={classes.rateStar__label}
        onClick={onClick}
      >
        <Star />
      </label>
      <input
        name="rate"
        className={classes.rateStar__input}
        type="radio"
        id="2"
      />
      <label
        htmlFor="2"
        className={classes.rateStar__label}
        onClick={onClick}
      >
        <Star />
      </label>
      <input
        name="rate"
        className={classes.rateStar__input}
        type="radio"
        id="1"
      />
      <label
        htmlFor="1"
        className={classes.rateStar__label}
        onClick={onClick}
      >
        <Star />
      </label>
    </div>
  );
};

RateStar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RateStar;
