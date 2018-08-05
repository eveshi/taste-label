import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SingleItem from '../SingleItem/SingleItem';
import classes from './AlbumsDisplayWithPage.css';

const AlbumsDisplayWithPage = (props) => {
  const {
    albums,
    page,
    totalPage,
    baseUrl,
  } = props;

  const albumsDisplay = albums.map(album => (
    <SingleItem
      albumCoverSrc={album.albumCoverSrc}
      albumName={album.albumName}
      musician={album.musician}
      year={album.year}
      userRate={album.userRate}
    />
  ))

  const pageDisplay = totalPage.map((number) => {
    let pageClass = classes.notChoosedPage;

    if (number === page) {
      pageClass = classes.choosedPage;
    }

    return (
      <div className={pageClass}>
        <Link to={baseUrl}>
          number
        </Link>
      </div>
    );
  });

  return (
    <div>
      {albumsDisplay}
      {pageDisplay}
    </div>
  );
};

AlbumsDisplayWithPage.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default AlbumsDisplayWithPage;
