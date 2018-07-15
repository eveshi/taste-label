import React, { PureComponent } from 'react';
import SingleItem from '../../components/SingleItem/SingleItem';

class Charts extends PureComponent {
  state = {
    album: {
      albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
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

export default Charts;
