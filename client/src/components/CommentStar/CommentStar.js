import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../assets/icon/star';
import classes from './CommentStar.scss';

const CommnetStar = (props) => {
  const { level } = props;

  const classArray = [
    classes.notfill,
    classes.notfill,
    classes.notfill,
    classes.notfill,
    classes.notfill,
  ];

  const classNames = classArray.map((item, index) => {
    let newItem = item;
    if (index < level) {
      newItem = classes.fill;
    }
    return newItem;
  });

  return (
    <div>
      <Star className={classNames[0]} />
      <Star className={classNames[1]} />
      <Star className={classNames[2]} />
      <Star className={classNames[3]} />
      <Star className={classNames[4]} />
    </div>
  );
};

CommnetStar.propTypes = {
  level: PropTypes.number.isRequired,
}

export default CommnetStar;
