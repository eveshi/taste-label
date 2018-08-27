import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const user = {
  name: 'WangErMa',
  email: 'hhhwang@gmail.com',
  labels: [
    'intersting',
    'sad song',
    'one pick',
    'english',
    'traditional',
    'want to buy',
    'LP',
    'jazz',
    'acid jazz',
    'post rock',
    'punk',
    'dont like',
    '80\'s',
    'aisan',
    'rap',
    'pop',
    'art pop',
    'male singer',
    'dead',
    'shit',
  ],
  albums: [
    {
      id: '1',
      albumCoverSrc: 'https://www.leonardcohenfiles.com/tns-cover.jpg',
      ranking: '01',
      albumName: 'Ten New Songs',
      musician: 'Leonard Cohen',
      userRate: 5,
      rating: '9.0',
      labels: [
        'LP',
      ],
    },
    {
      id: '2',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b1963f60a9e325d3f0287/1:1/w_160/lemon%20twigs_go%20to%20school.jpg',
      ranking: '01',
      albumName: 'Go to School',
      musician: 'The Lemon Twigs',
      userRate: 4,
      rating: '7.4',
      labels: [
        'LP',
      ],
    },
    {
      id: '3',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ecd008a8eb536b9b12888/1:1/w_320/maymind.jpg',
      ranking: '01',
      albumName: 'Cheap Storage',
      musician: 'Maymind',
      userRate: 4,
      rating: '8.3',
      labels: [
        'interesting',
        'LP',
      ],
    },
    {
      id: '4',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b254b8a8eb536b9b126be/1:1/w_320/Punishment%20in%20Flesh_Innumerable%20Forms.jpg',
      ranking: '01',
      albumName: 'Punishment in Flesh',
      musician: 'Innumerable Forms',
      userRate: 2,
      rating: '2.9',
      labels: [
        'LP',
      ],
    },
    {
      id: '5',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7735baf60a9e325d3f01d5/1:1/w_320/blood%20orange_negro%20swan.jpg',
      ranking: '01',
      albumName: 'Negro Swan',
      musician: 'Blood Orange',
      userRate: 3,
      rating: '4.5',
      labels: [
        'LP',
      ],
    },
    {
      id: '6',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7737b6f60a9e325d3f01d7/1:1/w_320/Anna%20Meredith_Anno.jpg',
      ranking: '01',
      albumName: 'Anno',
      musician: 'Anna Meredith',
      userRate: 4,
      rating: '9.1',
      labels: [
        'LP',
      ],
    },
    {
      id: '7',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b731d5e61613f18abb1b3c3/1:1/w_320/Donchristian_Where%20there\'s%20smoke.jpg',
      ranking: '01',
      albumName: 'Where There’s Smoke',
      musician: 'DonChristian',
      userRate: 3,
      rating: '5.7',
      labels: [
        'LP',
      ],
    },
    {
      id: '8',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ecea9f66e723ab75eacf9/1:1/w_320/skinless.jpg',
      ranking: '01',
      albumName: 'Marauder',
      musician: 'Interpol',
      userRate: 4,
      rating: '8.2',
      labels: [
        'interesting',
        'LP',
      ],
    },
    {
      id: '9',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ecea9f66e723ab75eacf9/1:1/w_320/skinless.jpg',
      ranking: '01',
      albumName: 'Skinless X-1',
      musician: 'Fire-Toolz',
      userRate: 1,
      rating: '7.5',
      labels: [
        'interesting',
        'LP',
      ],
    },
    {
      id: '10',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7ec49ba78458227bd780cd/1:1/w_320/parts.jpg',
      ranking: '01',
      albumName: 'Parts',
      musician: 'Ohmme',
      userRate: 3,
      rating: '8.2',
      labels: [
        'interesting',
        'LP',
      ],
    },
    {
      id: '11',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b247cbec1b01e6732b3a9/1:1/w_320/VA_Kompakt%20Total%2018.jpg',
      ranking: '01',
      albumName: 'Total 18',
      musician: 'Various Artists',
      userRate: 4,
      rating: '8.7',
      labels: [
        'LP',
      ],
    },
    {
      id: '12',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7af96a8a8eb536b9b12686/1:1/w_320/The%20Hermit%20And%20The%20Recluse_Orpheus%20Vs%20The%20Sirens.jpg',
      ranking: '01',
      albumName: 'Orpheus vs. the Sirens',
      musician: 'Hermit and the Recluse',
      userRate: 4,
      rating: '4.4',
      labels: [
        'LP',
      ],
    },
    {
      id: '13',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b1adfb1f53320b62b998a/1:1/w_320/gabriel%20kahane_book%20of%20travelers.jpg',
      ranking: '01',
      albumName: 'Book of Travelers',
      musician: 'Gabriel Kahane',
      userRate: 2,
      rating: '6.7',
      labels: [
        'LP',
      ],
    },
    {
      id: '14',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b1c58a78458227bd77ee1/1:1/w_320/Tra%CC%88den_st.jpg',
      ranking: '01',
      albumName: 'Träden',
      musician: 'Träden',
      userRate: 1,
      rating: '2.2',
      labels: [
        'LP',
      ],
    },
    {
      id: '15',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7732f167a8ff3026124467/1:1/w_320/djrum_portrait%20with%20firewood.jpg',
      ranking: '01',
      albumName: 'Portrait With Firewood',
      musician: 'Djrum',
      userRate: 5,
      rating: '9.5',
      labels: [
        'LP',
      ],
    },
    {
      id: '16',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b7b17a3494ed0265fa9d947/1:1/w_320/lori%20scacco_desire%20loop.jpg',
      ranking: '01',
      albumName: 'Desire Loop',
      musician: 'Lori Scacco',
      userRate: 2,
      rating: '3.3',
      labels: [
        'LP',
      ],
    },
    {
      id: '17',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b77198cb1f53320b62b980a/1:1/w_320/ariana%20grande_Sweetener.jpg',
      ranking: '01',
      albumName: 'Sweetener',
      musician: 'Ariana Grande',
      userRate: 4,
      rating: '4.7',
      labels: [
        'interesting',
        'LP',
      ],
    },
    {
      id: '18',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b771c3ea78458227bd77dbb/1:1/w_320/Amine%CC%81_ONEPOINTFIVE.jpg',
      ranking: '01',
      albumName: 'ONEPOINTFIVE',
      musician: 'Aminé',
      userRate: 4,
      rating: '8.5',
      labels: [
        'LP',
      ],
    },
    {
      id: '19',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b76d4984aea202eae1ac64e/1:1/w_320/our%20garden%20needs%20its%20flowers_jess%20sah%20bi%20peter%20one.jpg',
      ranking: '01',
      albumName: 'Our Garden Needs Its Flowers',
      musician: 'Jess Sah Bi',
      userRate: 3,
      rating: '7.2',
      labels: [
        'LP',
      ],
    },
    {
      id: '20',
      albumCoverSrc: 'https://media.pitchfork.com/photos/5b731f5179bedf15f0a107c6/1:1/w_320/prodigy_the%20fat%20of%20the%20land.jpg',
      ranking: '01',
      albumName: 'The Fat Of the Land',
      musician: 'The Prodigy',
      userRate: 3,
      rating: '6.9',
      labels: [
        'LP',
      ],
    },
  ],
};

const initialState = {
  loginStatus: true,
  user,
  comments: null,
};

const updateUser = (state, action) => {
  const valueToChange = {
    loginStatus: action.loginStatus,
    user: action.user,
  };

  return updateObject(state, valueToChange);
};

const updateComment = (state, action) => {
  const valueToChange = {
    comments: action.comments,
  };

  return updateObject(state, valueToChange);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
    case actionTypes.LOG_OUT:
      return updateUser(state, action);
    case actionTypes.POST_COMMENT:
    case actionTypes.PUT_COMMENT:
    case actionTypes.GET_COMMENT:
    case actionTypes.DELETE_COMMENT:
      return updateComment(state, action);
    default:
      return state;
  }
};

export default reducer;
