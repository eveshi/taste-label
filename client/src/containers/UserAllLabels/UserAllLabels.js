import React, { PureComponent } from 'react';
import AlbumsDisplayWithPage from '../../components/AlbumsDisplayWithPage/AbumsDisplayWithPage';
import LabelItem from '../../components/LabelItem/LabelItem';
import NoBorderButton from '../../components/NoBorderButton/NoBorderButton';
import classes from './UserAllLabels.css';

class UserAllLabels extends PureComponent {
  state = {
    albums,
    page: 8,
    totalPage: 19,
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

    const labelsDisplay = labels.map(label => (
      <NoBorderButton key={label}>
        <LabelItem
          labelItem={label}
          showClose={false}
        />
      </NoBorderButton>
    ));

    return (
      <div className={classes.userAllLabels}>
        <div className={classes.userAllLabels__title}>
          <p>
            - My Labels -
          </p>
        </div>
        <div className={classes.userAllLabels__labels}>
          {labelsDisplay}
        </div>
        <div className={classes.userAllLabels__mainLabel}>
          <p>
            label chosed:
          </p>
          <LabelItem
            labelItem={labelDisplayed}
            showClose={false}
          />
        </div>
        <AlbumsDisplayWithPage
          albums={albums}
          page={page}
          totalPage={totalPage}
          baseUrl="/user/labels"
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

const labels = [
  'intersting',
  'sad',
  'for you',
  'my tears',
  'intersting',
  'sad',
  'for you',
  'my tears',
  'intersting',
  'sad',
  'for you',
  'my tears',
  'intersting',
  'sad',
  'for you',
  'my tears',
  'intersting',
  'sad',
  'for you',
  'my tears',
];
