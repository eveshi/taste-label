import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <img
        src={albumCoverSrc}
        alt={albumName}
      />
      <div>
        <p>
          {albumName}
        </p>
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
  albumName: PropTypes.string.isRequired,
  musician: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default SingleItem;
