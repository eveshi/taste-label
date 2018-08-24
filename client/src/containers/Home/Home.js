import React, { PureComponent } from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
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
