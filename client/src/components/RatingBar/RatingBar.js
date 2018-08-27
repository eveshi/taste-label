import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RateStar from '../RateStar/RateStar';
import Button from '../Button/Button';
import Input from '../Input/Input';
import LabelItem from '../LabelItem/LabelItem';
import Textarea from '../Textarea/Textarea';
import classes from './RatingBar.css';

class RatingBar extends PureComponent {
  state = {
    showMore: false,
    label: '',
    labelList: [
      'jazz',
      'pop',
      'joy',
    ],
    comment: '',
    inputLength: 0,
  }

  showMoreHandler = () => {
    const { showMore } = this.state;
    this.setState({
      showMore: !showMore,
    });
  }

  quickSave = () => {
    console.log('yes');
  }

  labelInput = (event) => {
    const { key } = event;
    const {
      label,
      labelList,
    } = this.state;
    const list = [...labelList];
    if (key === 'Enter') {
      list.push(label);
      this.setState({
        label: '',
        labelList: list,
      });
    }
  }

  labelChangeHandler = (event) => {
    const { value } = event.target;
    this.setState({
      label: value,
    });
  }

  labelDelete = (index) => {
    const { labelList } = this.state;
    const list = [...labelList];
    list.splice(index, 1);
    this.setState({
      labelList: list,
    });
  }

  commentChangeHandler = (event) => {
    const { value } = event.target;
    const inputLength = value.length;
    this.setState({
      comment: value,
      inputLength,
    });
  }

  render() {
    const {
      showMore,
      label,
      labelList,
      comment,
      inputLength,
    } = this.state;

    const {
      showMoreHandler,
      quickSave,
      labelInput,
      labelChangeHandler,
      labelDelete,
      commentChangeHandler,
    } = this;

    const {
      tracks,
    } = this.props;

    const labelTracks = tracks.map(track => (
      <div
        key={track.id}
        className={classes.ratingBar__more__track_single}
      >
        <div className={classes.ratingBar__more__track_single_text}>
          <p>
            {track.id}
            .&nbsp;
          </p>
          <p>
            {track.name}
          </p>
        </div>
        <RateStar />
      </div>
    ));

    const labels = labelList.map(((item, index) => (
      <LabelItem
        key={item}
        labelItem={item}
        onClick={() => labelDelete(index)}
      />
    )));

    return (
      <div className={classes.ratingBar}>
        <div className={classes.ratingBar__rateNow}>
          <div className={classes.ratingBar__rateNow__text}>
            <p>
              Rate Now
            </p>
          </div>
          <RateStar />
        </div>
        {showMore
          ? (
            <React.Fragment>
              <div className={classes.ratingBar__more}>
                <Input
                  maxLength="20"
                  value={label}
                  placeholder="Enter label here..."
                  onKeyPress={event => labelInput(event)}
                  onChange={event => labelChangeHandler(event)}
                />
                <div className={classes.ratingBar__more__labels}>
                  {labels}
                </div>
                <Textarea
                  maxLength="10000"
                  value={comment}
                  placeholder="Write your comment..."
                  inputLength={inputLength}
                  onChange={event => commentChangeHandler(event)}
                />
                <div className={classes.ratingBar__more__track}>
                  {labelTracks}
                </div>
              </div>
              <div className={classes.ratingBar__button}>
                <Button onClick={quickSave}>
                  save all
                </Button>
                <Button onClick={showMoreHandler}>
                  write less
                </Button>
              </div>
            </React.Fragment>
          )
          : (
            <div className={classes.ratingBar__button}>
              <Button onClick={quickSave}>
                quick save
              </Button>
              <Button onClick={showMoreHandler}>
                write more
              </Button>
            </div>
          )}
      </div>
    );
  }
}

RatingBar.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RatingBar;
