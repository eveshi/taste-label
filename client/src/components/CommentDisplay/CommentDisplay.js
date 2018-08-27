import React, { PureComponent } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import classes from './CommentDisplay.css';
import Button from '../Button/Button';

class CommentDisplay extends PureComponent {
  state={
    comments: [
      {
        user: 'eve',
        rate: 4,
        comment: 'In My Secret Life. I saw you this morning. A Thousand Kisses Deep. for Sandy. That Don\'t Make It Junk. I fought against the bottle, Here It Is. Here is your crown. Love Itself. for L.W. *) The light came through the window, By The Rivers Dark. By the rivers dark. Alexandra Leaving. You Have Loved Enough.',
        tracksRate: [2, 3, 4, 4, 5, 3, 4, 5],
      },
      {
        user: 'eve2',
        rate: 4,
        comment: 'In My Secret Life. I saw you this morning. A Thousand Kisses Deep. for Sandy. That Don\'t Make It Junk. I fought against the bottle, Here It Is. Here is your crown. Love Itself. for L.W. *) The light came through the window, By The Rivers Dark. By the rivers dark. Alexandra Leaving. You Have Loved Enough.',
        tracksRate: [2, 3, 4, 4, 5, 3, 4, 5],
      },
    ],
  }

  render() {
    const { comments } = this.state;

    const commentDisplay = comments.map(comment => (
      <CommentItem
        key={comment.user}
        user={comment.user}
        rate={comment.rate}
        comment={comment.comment}
        tracksRate={comment.tracksRate}
      />
    ));

    return (
      <div className={classes.commentDisplay}>
        <div className={classes.commentDisplay__title}>
          <p>
            &diams;&nbsp;comments
          </p>
        </div>
        {commentDisplay}
        <div className={classes.commentDisplay__showMore}>
          <Button>
            more comments
          </Button>
        </div>
      </div>
    );
  }
}

export default CommentDisplay;
