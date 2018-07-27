import React from 'react';
import PropTypes from 'prop-types';
import CommnetStar from '../CommentStar/CommentStar';
import classes from './CommentItem.css';

const CommentItem = (props) => {
  const {
    user,
    rate,
    comment,
    tracksRate,
  } = props;

  const trackRate = tracksRate.map((singleRate, index) => (
    <div
      key={index.toString()}
      className={classes.commentItem__content__trackRate_single}
    >
      <p>
        {index}
        .&nbsp;
      </p>
      <CommnetStar rate={singleRate} />
    </div>
  ));

  return (
    <div className={classes.commentItem}>
      <div className={classes.commentItem__title}>
        <p>
          {user}
        </p>
        <CommnetStar rate={rate} />
      </div>
      <div className={classes.commentItem__content}>
        <div className={classes.commentItem__content__trackRate}>
          {trackRate}
        </div>
        <p className={classes.commentItem__content__comment}>
          {comment}
        </p>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  user: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  tracksRate: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CommentItem;
