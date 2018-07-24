import React from 'react';
import Rate from '../../../assets/icon/rate';
import Labeling from '../../../assets/icon/label';
import Discuss from '../../../assets/icon/discuss';
import classes from './Intro.css';

const Intro = () => (
  <div className={classes.intro}>
    <p className={classes.intro__header}>
      For True Music Lovers.
    </p>
    <div className={classes.intro__feature_1}>
      <Rate />
      <p>
        Comment every single song.
      </p>
    </div>
    <div className={classes.intro__feature_2}>
      <Labeling />
      <p>
        Easy rating and labeling system.
      </p>
    </div>
    <div className={classes.intro__feature_3}>
      <Discuss />
      <p>
        Discuss with others only about music.
      </p>
    </div>
  </div>
);

export default Intro;
