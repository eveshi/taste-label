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
      key={album.id}
      albumCoverSrc={album.albumCoverSrc}
      albumName={album.albumName}
      musician={album.musician}
      year={album.year}
      userRate={album.userRate}
    />
  ));

  const pages = [];

  if (totalPage < 12) {
    for (let i = 1; i < totalPage + 1; i += 1) {
      pages.push(i);
    }
  }

  if (totalPage > 11 && page < 8) {
    for (let i = 1; i < 10; i += 1) {
      pages.push(i);
    }

    pages.push('...');

    for (let i = totalPage - 1; i < totalPage + 1; i += 1) {
      pages.push(i);
    }
  }

  if (totalPage > 11 && page > 7 && page < totalPage - 7) {
    for (let i = 1; i < 3; i += 1) {
      pages.push(i);
    }

    pages.push('...');

    for (let i = page - 4; i < page + 5; i += 1) {
      pages.push(i);
    }

    pages.push('...');

    for (let i = totalPage - 1; i < totalPage + 1; i += 1) {
      pages.push(i);
    }
  }

  if (totalPage > 11 && page > totalPage - 8) {
    for (let i = 1; i < 3; i += 1) {
      pages.push(i);
    }

    pages.push('...');

    for (let i = totalPage - 9; i < totalPage + 1; i += 1) {
      pages.push(i);
    }
  }

  const pageDisplay = pages.map((number) => {
    if (number === '...') {
      const random = Math.random();
      return (
        <div
          key={random}
          className={classes.albumsDisplayWithPage__pages_page}
        >
          <p>
            ...
          </p>
        </div>
      );
    }

    return (
      <div
        key={number}
        className={classes.albumsDisplayWithPage__pages_page}
      >
        <Link to={baseUrl}>
          {number}
        </Link>
      </div>
    );
  });

  return (
    <div className={classes.albumsDisplayWithPage}>
      <div className={classes.albumsDisplayWithPage__albums}>
        {albumsDisplay}
      </div>
      <div className={classes.albumsDisplayWithPage__pages}>
        {pageDisplay}
      </div>
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
