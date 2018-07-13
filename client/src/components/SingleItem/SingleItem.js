import React from 'react';
import PropTypes from 'prop-types';

const SingleItem = (props) => {
  const {
    albumCoverSrc,
    ranking,
    albumName,
    musician,
    year,
    genres,
    rating,
  } = props;

  return (
    <div>
      <img
        src={albumCoverSrc}
        alt={albumName}
      />
      <div>
        <div>
          <p>
            {ranking}
          </p>
          <p>
            {albumName}
          </p>
        </div>
        <p>
          {musician}
        </p>
        <div>
          <p>
            {year}
          </p>
          <p>
            {genres}
          </p>
        </div>
      </div>
      <p>
        {rating}
      </p>
    </div>
  );
};

SingleItem.propTypes = {
  albumCoverSrc: PropTypes.string.isRequired,
  ranking: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  musician: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default SingleItem;
