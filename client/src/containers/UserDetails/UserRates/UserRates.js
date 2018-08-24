import React from '../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import SmallTitleBar from '../../../components/SmallTitleBar/SmallTitleBar';
import SingleItem from '../../../components/SingleItem/SingleItem';
import classes from './UserRates.css';

const UserRates = (props) => {
  const {
    albums,
  } = props;

  const ratesDisplay = albums.map(album => (
    <SingleItem
      key={album.id}
      albumCoverSrc={album.albumCoverSrc}
      albumName={album.albumName}
      musician={album.musician}
      rating={album.rating}
      userRate={album.userRate}
    />
  ));

  return (
    <div className={classes.userRates}>
      <SmallTitleBar title="recent rates" />
      <div className={classes.userRates__rates}>
        {ratesDisplay}
      </div>
    </div>
  );
};

UserRates.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserRates;
