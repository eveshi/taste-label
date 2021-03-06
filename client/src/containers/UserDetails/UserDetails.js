import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserLabels from './UserLabels/UserLabels';
import UserRates from './UserRates/UserRates';
import NoBorderButton from '../../components/NoBorderButton/NoBorderButton';
import classes from './UserDetails.css';

class UserDetails extends PureComponent {
  state = {
    name: 'eve',
    email: 'play.sos@gmail.com',
    labels: [],
    albums,
  }

  componentWillMount() {
    const {
      user,
    } = this.props;

    this.setState({
      name: user.name,
      email: user.email,
      labels: user.labels,
      albums: user.albums,
    });
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

const mapStateToProps = state => ({
  user: state.user,
  comments: state.comments,
});

export default connect(mapStateToProps)(UserDetails);

const user = {
  name: '',
  email: '',
  labels: [],
  albums: [],
};

UserDetails.propTypes = {
  user: PropTypes.instanceOf(user).isRequired,
};

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
