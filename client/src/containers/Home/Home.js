import React, { PureComponent } from 'react';
import Intro from './Intro/Intro';
import ChartRow from './ChartRow/ChartRow';
import classes from './Home.css';

class Charts extends PureComponent {
  state = {
    list,
  }

  render() {
    const { list } = this.state;
    return (
      <div className={classes.home}>
        <Intro />
        <ChartRow
          list={list}
          chartName="Latest Album"
        />
        <ChartRow
          list={list}
          chartName="New Best Album"
        />
        <ChartRow
          list={list}
          chartName="New Best Singles"
        />
      </div>
    );
  }
}

export default Charts;

const list = [
  {
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
  {
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    year: '2001',
    genres: 'soft rock',
    rating: '9.0',
  },
];
