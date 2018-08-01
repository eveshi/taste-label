import React, { PureComponent } from 'react';
import UserLabels from './UserLabels/UserLabels';
import UserRates from './UserRates/UserRates';
import NoBorderButton from '../../components/NoBorderButton/NoBorderButton';
import classes from './UserDetails.css';

class UserDetails extends PureComponent {
  state = {
    name: 'eve',
    email: 'play.sos@gmail.com',
    labels: [
      'abc',
      'efg',
      'hig',
      'beautiful',
      'house',
      'trap',
      'r&b',
      'reall ycool staff',
      'hate this',
      'comme on i want more',
    ],
    albums,
  }

  render() {
    const {
      name,
      email,
      labels,
      albums,
    } = this.state;

    return (
      <div className={classes.userDetails}>
        <div className={classes.userDetails__title}>
          <p className={classes.userDetails__title_name}>
            {name}
          </p>
          <p className={classes.userDetails__title_email}>
            {email}
          </p>
          <NoBorderButton>
            change password
          </NoBorderButton>
        </div>
        <UserLabels labels={labels} />
        <UserRates albums={albums} />
      </div>
    );
  }
}

export default UserDetails;

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
];
