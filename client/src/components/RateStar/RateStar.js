import React from 'react';
import Star from '../../assets/icon/star';
import classes from './RateStar.css';

const RateStar = () => (
  <div className={classes.rateStar}>
    <input
      name="rate"
      className={classes.rateStar__input}
      type="radio"
      id="5"
    />
    <label htmlFor="5" className={classes.rateStar__label}>
      <Star />
    </label>
    <input
      name="rate"
      className={classes.rateStar__input}
      type="radio"
      id="4"
    />
    <label htmlFor="4" className={classes.rateStar__label}>
      <Star />
    </label>
    <input
      name="rate"
      className={classes.rateStar__input}
      type="radio"
      id="3"
    />
    <label htmlFor="3" className={classes.rateStar__label}>
      <Star />
    </label>
    <input
      name="rate"
      className={classes.rateStar__input}
      type="radio"
      id="2"
    />
    <label htmlFor="2" className={classes.rateStar__label}>
      <Star />
    </label>
    <input
      name="rate"
      className={classes.rateStar__input}
      type="radio"
      id="1"
    />
    <label htmlFor="1" className={classes.rateStar__label}>
      <Star />
    </label>
  </div>
);

export default RateStar;
