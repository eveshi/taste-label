import React, { PureComponent } from 'react';
import SingleItem from '../../components/SingleItem/SingleItem';
import classes from './ArtistDetails.css';

class ArtistDetails extends PureComponent {
  state = {
    artistPhotoSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Leonard_Cohen%2C_1988_01.jpg',
    name: 'leonard cohen',
    birthName: 'Leonard Norman Cohen',
    birth: '21/09/1934 ~ 07/11/2016',
    genres: 'folk/soft rock',
    intro: 'Leonard Norman Cohen CC GOQ (September 21, 1934 – November 7, 2016) was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and personal relationships.[2] Cohen was inducted into the Canadian Music Hall of Fame, the Canadian Songwriters Hall of Fame, and the Rock and Roll Hall of Fame. He was invested as a Companion of the Order of Canada, the nation\'s highest civilian honour. In 2011, Cohen received one of the Prince of Asturias Awards for literature and the ninth Glenn Gould Prize.',
    albums,
  }

  render() {
    const {
      artistPhotoSrc,
      name,
      birthName,
      birth,
      genres,
      intro,
      albums,
    } = this.state;

    const discographyDisplay = albums.map(album => (
      <SingleItem
        key={album.id}
        albumCoverSrc={album.albumCoverSrc}
        albumName={album.albumName}
        musician={album.musician}
        year={album.year}
        genres={album.genres}
        rating={album.rating}
      />
    ));

    return (
      <div className={classes.artistDetails}>
        <div className={classes.artistDetails__details}>
          <img
            src={artistPhotoSrc}
            alt={name}
          />
          <div className={classes.artistDetails__details__text}>
            <p className={classes.artistDetails__details__text_name}>
              {name}
            </p>
            <p>
              Birth Name:&nbsp;
              {birthName}
            </p>
            <p>
              Birth:&nbsp;
              {birth}
            </p>
            <p>
              Genres:&nbsp;
              {genres}
            </p>
            <div className={classes.artistDetails__details_intro}>
              <p>
                Intro:
              </p>
              <p>
                {intro}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.artistDetails__discography}>
          <p className={classes.artistDetails__discography_title}>
            discography
          </p>
          <div className={classes.artistDetails__discography_albums}>
            {discographyDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetails;

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
