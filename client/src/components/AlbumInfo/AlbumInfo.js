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
    <div className={classes.albumInfo__leftbar__tracks__single}>
      <p>
        {track.name}
      </p>
      <p>
        {track.duration}
      </p>
    </div>
  ));

  return (
    <div className={classes.albumInfo}>
      <div className={classes.albumInfo__leftbar}>
        <img src={albumCoverSrc} alt="album cover" />
        <p>
          {type}
        </p>
        <div className={classes.albumInfo__leftbar__tracks}>
          {tracksList}
        </div>
      </div>
      <div className={classes.albumInfo__rightbar}>
        <p>
          {musician}
        </p>
        <p>
          {albumName}
        </p>
        <p>
          {year}
        </p>
        <p>
          {genres}
        </p>
        <p>
          {description}
        </p>
        <p>
          {rating}
        </p>
        <p>
          {numbersOfRatings}
        </p>
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
  tracks: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AlbumInfo;
