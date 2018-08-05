import React, { PureComponent } from 'react';
import AlbumsDisplayWithPage from '../../components/AlbumsDisplayWithPage/AbumsDisplayWithPage';
import UserLabels from '../UserDetails/UserLabels/UserLabels';
import LabelItem from '../../components/LabelItem/LabelItem';

class UserAllLabels extends PureComponent {
  state = {
    albums,
    page: 3,
    totalPage: 5,
    labels,
    labelDisplayed: 'intersting',
  }

  render() {
    const {
      albums,
      page,
      totalPage,
      labels,
      labelDisplayed,
    } = this.state;

    return (
      <div>
        <p>
          My Labels
        </p>
        <UserLabels labels={labels} />
        <div>
          <LabelItem
            labelItem={labelDisplayed}
            showClose={false}
          />
        </div>
        <AlbumsDisplayWithPage
          albums={albums}
          page={page}
          totalPage={totalPage}
        />
      </div>
    );
  }
}

export default UserAllLabels;

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

const labels = [
  'intersting',
  'sad',
  'for you',
  'my tears',
];
