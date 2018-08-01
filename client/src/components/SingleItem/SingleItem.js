import React from 'react';
import PropTypes from 'prop-types';
import CommentStar from '../CommentStar/CommentStar';
import classes from './SingleItem.css';

const SingleItem = (props) => {
  const {
    albumCoverSrc,
    albumName,
    musician,
    year,
    genres,
    rating,
    userRate,
  } = props;

  let classForHomeItem = classes.singleItem__description;
  let classForUserPage = classes.displayNone;

  if (userRate !== 0) {
    classForHomeItem = classes.displayNone;
    classForUserPage = classes.singleItem__description;
  }

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
      <div className={classForHomeItem}>
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
      <div className={classForUserPage}>
        <p className={classes.singleItem__description__musician}>
          {musician}
        </p>
        <p className={classes.singleItem__description__albumName}>
          {albumName}
        </p>
        <div className={classes.singleItem__description__star}>
          <CommentStar rate={userRate} />
        </div>
      </div>
    </div>
  );
};

SingleItem.propTypes = {
  albumCoverSrc: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  musician: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.string,
  rating: PropTypes.string,
  userRate: PropTypes.number,
};

SingleItem.defaultProps = {
  genres: '',
  rating: '',
  userRate: 0,
};

export default SingleItem;
