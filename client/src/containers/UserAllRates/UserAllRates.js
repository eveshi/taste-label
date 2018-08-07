import React, { PureComponent } from 'react';
import AlbumsDisplayWithPage from '../../components/AlbumsDisplayWithPage/AbumsDisplayWithPage';
import classes from './UserAllRates.css';

class UserAllRates extends PureComponent {
  state = {
    albums,
    page: 9,
    totalPage: 20,
  }

  render() {
    const {
      albums,
      page,
      totalPage,
    } = this.state;

    return (
      <div className={classes.userAllRates}>
        <div className={classes.userAllRates__title}>
          <p>
            - My Rates -
          </p>
        </div>
        <AlbumsDisplayWithPage
          albums={albums}
          page={page}
          totalPage={totalPage}
          baseUrl="/user/rates"
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
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '2',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '3',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '4',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '5',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '6',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '7',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '8',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '9',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '10',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '11',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '12',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '13',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '14',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '15',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '16',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '17',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '18',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '19',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
  {
    id: '20',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 3,
    rating: '9.0',
  },
];
