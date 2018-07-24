import React from 'react';
import RateStar from '../RateStar/RateStar';
import classes from './RatingBar.css';

const RatingBar = () => (
  <div className={classes.ratingBar}>
    <p>
      Rate Now
    </p>
    <RateStar />
    <button type="button">
      quick save
    </button>
    <button type="button">
      write more
    </button>
    <input />
    <div>
      <p>
        1.good
      </p>
      <input />
      <p>
        show
      </p>
    </div>
  </div>
);

export default RatingBar;
