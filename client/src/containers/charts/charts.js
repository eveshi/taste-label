import React, { PureComponent } from 'react';
import SingleItem from '../../components/SingleItem/SingleItem';

class charts extends PureComponent {
  state = {
    album: {
      albumCoverSrc: 'https://en.wikipedia.org/wiki/Ten_New_Songs#/media/File:LeonardCohenTenNewSongs.jpg',
      ranking: '01',
      albumName: 'Ten New Songs',
      musician: 'Leonard Cohen',
      year: '2001',
      genres: 'soft rock',
      rating: '9.0',
    },
  }

  render() {
    const { album } = this.state;
    return (
      <SingleItem
        albumCoverSrc={album.albumCoverSrc}
        ranking={album.ranking}
        albumName={album.albumName}
        musician={album.musician}
        year={album.year}
        genres={album.genres}
        rating={album.rating}
      />
    );
  }
}

export default charts;
