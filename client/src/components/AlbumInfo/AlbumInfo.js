import React from 'react';
import PropTypes from 'prop-types';
import classes from './AlbumInfo.css';

const AlbumInfo = (props) => {
  const {
    albumCoverSrc,
    albumName,
    description,
    genres,
    musician,
    numbersOfRatings,
    rating,
    tracks,
    type,
    year,
  } = props;

  const tracksList = tracks.map(track => (
    <div
      key={track.id}
      className={classes.albumInfo__leftbar__tracks__single}
    >
      <p>
        {track.id}
        .&nbsp;
      </p>
      <p>
        {track.name}
        &nbsp;&nbsp;
      </p>
      <p>
        {track.duration}
      </p>
    </div>
  ));

  return (
    <div className={classes.albumInfo}>
      <div className={classes.albumInfo__leftbar}>
        <div className={classes.albumInfo__leftbar__cover}>
          <img src={albumCoverSrc} alt="album cover" />
          <p>
            type:&nbsp;
            {type}
          </p>
        </div>
        <div className={classes.albumInfo__leftbar__tracks}>
          <p className={classes.albumInfo__leftbar__tracks__title}>
            tracks:
          </p>
          {tracksList}
        </div>
      </div>
      <div className={classes.albumInfo__rightbar}>
        <p className={classes.albumInfo__rightbar__albumName}>
          {albumName}
        </p>
        <div className={classes.albumInfo__rightbar__details}>
          <p>
            artist:&nbsp;
            {musician}
          </p>
          <p>
            year:&nbsp;
            {year}
          </p>
          <p>
            genres:&nbsp;
            {genres}
          </p>
        </div>
        <div className={classes.albumInfo__rightbar__rating}>
          <p className={classes.albumInfo__rightbar__rating__number}>
            {rating}
          </p>
          <p>
            &nbsp;from&nbsp;
            {numbersOfRatings}
            &nbsp;reviewers
          </p>
        </div>
        <div className={classes.albumInfo__rightbar__description}>
          <p className={classes.albumInfo__rightbar__description__title}>
            Introduction:
          </p>
          <p className={classes.albumInfo__rightbar__description__content}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

AlbumInfo.propTypes = {
  albumCoverSrc: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  musician: PropTypes.string.isRequired,
  numbersOfRatings: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AlbumInfo;
