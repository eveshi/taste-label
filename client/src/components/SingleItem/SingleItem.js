import React from 'react';
import PropTypes from 'prop-types';
import classes from './SingleItem.css';

const SingleItem = (props) => {
  const {
    albumCoverSrc,
    albumName,
    musician,
    year,
    genres,
    rating,
  } = props;

  return (
    <div className={classes.singleItem}>
      <div className={classes.singleItem__albumCover}>
        <img
          src={albumCoverSrc}
          alt={albumName}
        />
        <p className={classes.singleItem__albumCover__rating}>
          {rating}
        </p>
      </div>
      <div className={classes.singleItem__description}>
        <p className={classes.singleItem__description__musician}>
          {musician}
        </p>
        <p className={classes.singleItem__description__albumName}>
          {albumName}
        </p>
        <p className={classes.singleItem__description__year}>
          {year}
        </p>
        <p className={classes.singleItem__description__genres}>
          {genres}
        </p>
      </div>
    </div>
  );
};

SingleItem.propTypes = {
  albumCoverSrc: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  musician: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default SingleItem;
