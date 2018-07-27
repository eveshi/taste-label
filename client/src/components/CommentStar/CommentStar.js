import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../assets/icon/star';
import classes from './CommentStar.css';

const CommnetStar = (props) => {
  const { rate } = props;

  const classArray = [
    classes.notfill,
    classes.notfill,
    classes.notfill,
    classes.notfill,
    classes.notfill,
  ];

  const classNames = classArray.map((item, index) => {
    let newItem = item;
    if (index < rate) {
      newItem = classes.fill;
    }
    return newItem;
  });

  return (
    <div className={classes.commentStar}>
      <div className={classNames[0]}>
        <Star />
      </div>
      <div className={classNames[1]}>
        <Star />
      </div>
      <div className={classNames[2]}>
        <Star />
      </div>
      <div className={classNames[3]}>
        <Star />
      </div>
      <div className={classNames[4]}>
        <Star />
      </div>
    </div>
  );
};

CommnetStar.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default CommnetStar;
