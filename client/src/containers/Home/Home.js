import React, { PureComponent } from 'react';
import Intro from './Intro/Intro';
import ChartRow from './ChartRow/ChartRow';
import classes from './Home.css';

class Charts extends PureComponent {
  state = {
    list1,
    list2,
    list3,
  }

  render() {
    const { list1, list2, list3 } = this.state;
    return (
      <div className={classes.home}>
        <Intro />
        <ChartRow
          list={list1}
          chartName="Latest Album"
        />
        <ChartRow
          list={list2}
          chartName="New Best Album"
        />
        <ChartRow
          list={list3}
          chartName="New Best Singles"
        />
      </div>
    );
  }
}

export default Charts;

const list1 = [
  {
    id: '1',
    albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
    ranking: '01',
    albumName: 'Ten New Songs',
    musician: 'Leonard Cohen',
    userRate: 5,
    year: 2011,
    genres: 'folk/rock',
    rating: '9.0',
  },
  {
    id: '2',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b1963f60a9e325d3f0287/1:1/w_160/lemon%20twigs_go%20to%20school.jpg',
    ranking: '01',
    albumName: 'Go to School',
    musician: 'The Lemon Twigs',
    userRate: 4,
    year: 2005,
    genres: 'rap',
    rating: '7.4',
  },
  {
    id: '3',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ecd008a8eb536b9b12888/1:1/w_320/maymind.jpg',
    ranking: '01',
    albumName: 'Cheap Storage',
    musician: 'Maymind',
    userRate: 4,
    year: 1988,
    genres: 'country',
    rating: '8.3',
  },
  {
    id: '4',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b254b8a8eb536b9b126be/1:1/w_320/Punishment%20in%20Flesh_Innumerable%20Forms.jpg',
    ranking: '01',
    albumName: 'Punishment in Flesh',
    musician: 'Innumerable Forms',
    userRate: 2,
    year: 2002,
    genres: 'rock/pop',
    rating: '2.9',
  },
  {
    id: '5',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7735baf60a9e325d3f01d5/1:1/w_320/blood%20orange_negro%20swan.jpg',
    ranking: '01',
    albumName: 'Negro Swan',
    musician: 'Blood Orange',
    userRate: 3,
    year: 1967,
    genres: 'R&B',
    rating: '4.5',
  },
  {
    id: '6',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7737b6f60a9e325d3f01d7/1:1/w_320/Anna%20Meredith_Anno.jpg',
    ranking: '01',
    albumName: 'Anno',
    musician: 'Anna Meredith',
    userRate: 4,
    year: 1988,
    genres: 'soul',
    rating: '9.1',
  },
];

const list2 = [
  {
    id: '7',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b731d5e61613f18abb1b3c3/1:1/w_320/Donchristian_Where%20there\'s%20smoke.jpg',
    ranking: '01',
    albumName: 'Where There’s Smoke',
    musician: 'DonChristian',
    userRate: 3,
    year: 2017,
    genres: 'rap',
    rating: '5.7',
  },
  {
    id: '8',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ecea9f66e723ab75eacf9/1:1/w_320/skinless.jpg',
    ranking: '01',
    albumName: 'Marauder',
    musician: 'Interpol',
    userRate: 4,
    year: 2018,
    genres: 'post rock',
    rating: '8.2',
  },
  {
    id: '9',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ecea9f66e723ab75eacf9/1:1/w_320/skinless.jpg',
    ranking: '01',
    albumName: 'Skinless X-1',
    musician: 'Fire-Toolz',
    userRate: 1,
    year: 2018,
    genres: 'folk',
    rating: '7.5',
  },
  {
    id: '10',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ec49ba78458227bd780cd/1:1/w_320/parts.jpg',
    ranking: '01',
    albumName: 'Parts',
    musician: 'Ohmme',
    userRate: 3,
    year: 2016,
    genres: 'jazz',
    rating: '8.2',
  },
  {
    id: '11',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b247cbec1b01e6732b3a9/1:1/w_320/VA_Kompakt%20Total%2018.jpg',
    ranking: '01',
    albumName: 'Total 18',
    musician: 'Various Artists',
    userRate: 4,
    year: 2003,
    genres: 'pop',
    rating: '8.7',
  },
  {
    id: '12',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7af96a8a8eb536b9b12686/1:1/w_320/The%20Hermit%20And%20The%20Recluse_Orpheus%20Vs%20The%20Sirens.jpg',
    ranking: '01',
    albumName: 'Orpheus vs. the Sirens',
    musician: 'Hermit and the Recluse',
    userRate: 4,
    year: 2004,
    genres: 'art pop',
    rating: '4.4',
  },
];

const list3 = [
  {
    id: '13',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b1adfb1f53320b62b998a/1:1/w_320/gabriel%20kahane_book%20of%20travelers.jpg',
    ranking: '01',
    albumName: 'Book of Travelers',
    musician: 'Gabriel Kahane',
    userRate: 2,
    year: 1988,
    genres: 'dream pop',
    rating: '6.7',
  },
  {
    id: '14',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b1c58a78458227bd77ee1/1:1/w_320/Tra%CC%88den_st.jpg',
    ranking: '01',
    albumName: 'Träden',
    musician: 'Träden',
    userRate: 1,
    year: 2011,
    genres: 'alternative',
    rating: '2.2',
  },
  {
    id: '15',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7732f167a8ff3026124467/1:1/w_320/djrum_portrait%20with%20firewood.jpg',
    ranking: '01',
    albumName: 'Portrait With Firewood',
    musician: 'Djrum',
    userRate: 5,
    year: 2000,
    genres: 'asian tranditional',
    rating: '9.5',
  },
  {
    id: '16',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b17a3494ed0265fa9d947/1:1/w_320/lori%20scacco_desire%20loop.jpg',
    ranking: '01',
    albumName: 'Desire Loop',
    musician: 'Lori Scacco',
    userRate: 2,
    year: 2016,
    genres: 'country',
    rating: '3.3',
  },
  {
    id: '17',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b77198cb1f53320b62b980a/1:1/w_320/ariana%20grande_Sweetener.jpg',
    ranking: '01',
    albumName: 'Sweetener',
    musician: 'Ariana Grande',
    userRate: 4,
    year: 2003,
    genres: 'acid jazz',
    rating: '4.7',
  },
  {
    id: '18',
    albumCoverSrc: 'https://media.pitchfork.com/photos/5b771c3ea78458227bd77dbb/1:1/w_320/Amine%CC%81_ONEPOINTFIVE.jpg',
    ranking: '01',
    albumName: 'ONEPOINTFIVE',
    musician: 'Aminé',
    userRate: 4,
    year: 2001,
    genres: 'pop',
    rating: '8.5',
  },
];
