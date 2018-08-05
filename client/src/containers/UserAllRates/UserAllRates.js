import React, { PureComponent } from 'react';
import AlbumsDisplayWithPage from '../../components/AlbumsDisplayWithPage/AbumsDisplayWithPage';

class UserAllRates extends PureComponent {
  state = {
    albums,
    page: 3,
    totalPage: 5,
  }

  render() {
    const {
      albums,
      page,
      totalPage,
    } = this.state;

    return (
      <div>
        <p>
          My Rates
        </p>
        <AlbumsDisplayWithPage
          albums={albums}
          page={page}
          totalPage={totalPage}
        />
      </div>
    );
  }
}

export default UserAllRates;

const albums = [
  {
    id: '1',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    id: '2',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    id: '3',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    id: '4',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    id: '5',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    id: '6',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
];
