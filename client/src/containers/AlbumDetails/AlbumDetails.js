import React, { PureComponent } from 'react';
import AlbumInfo from '../../components/AlbumInfo/AlbumInfo';
import classes from './AlbumDetails.css';

class AlbumDetails extends PureComponent {
  state = {
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    albumName: 'Ten New Songs',
    description: 'In My Secret Life. I saw you this morning. A Thousand Kisses Deep. for Sandy. That Don\'t Make It Junk. I fought against the bottle, Here It Is. Here is your crown. Love Itself. for L.W. *) The light came through the window, By The Rivers Dark. By the rivers dark. Alexandra Leaving. You Have Loved Enough.',
    genres: 'soft rock',
    musician: 'Leonard Cohen',
    numbersOfRatings: '138',
    rating: '9.0',
    tracks: [
      {
        name: 'In My Secret Life',
        duration: '4:55',
      },
      {
        name: 'A Thousand Kisses Deep',
        duration: '6:29',
      },
      {
        name: 'That Don\'t Make It Junk',
        duration: '4:28',
      },
      {
        name: 'Here It Is',
        duration: '4:18',
      },
      {
        name: 'Love Itself',
        duration: '5:26',
      },
      {
        name: 'By the Rivers Dark',
        duration: '5:20',
      },
      {
        name: 'Alexandra Leaving',
        duration: '5:25',
      },
      {
        name: 'You Have Loved Enough',
        duration: '5:41',
      },
      {
        name: 'Boogie Street',
        duration: '6:04',
      },
      {
        name: 'The Land of Plenty',
        duration: '4:35',
      },
    ],
    type: 'album',
    year: '2001',
  }

  render() {
    const {
      albumCoverSrc,
      albumName,
      description,
      genres,
      musician,
      numbersOfRatings,
      rating,
      tracks,
      type,
      year,
    } = this.state;

    return (
      <AlbumInfo
        className={classes.albumDetails}
        albumCoverSrc={albumCoverSrc}
        albumName={albumName}
        description={description}
        genres={genres}
        musician={musician}
        numbersOfRatings={numbersOfRatings}
        rating={rating}
        tracks={tracks}
        type={type}
        year={year}
      />
    );
  }
}

export default AlbumDetails;
