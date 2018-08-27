import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlbumsDisplayWithPage from '../../components/AlbumsDisplayWithPage/AbumsDisplayWithPage';
import LabelItem from '../../components/LabelItem/LabelItem';
import NoBorderButton from '../../components/NoBorderButton/NoBorderButton';
import classes from './UserAllLabels.css';

class UserAllLabels extends PureComponent {
  state = {
    albums: [],
    page: 1,
    totalPage: 1,
    labels: [],
    labelDisplayed: 'interesting',
  }

  componentWillMount() {
    const { albums, labels } = this.props;
    const { labelDisplayed } = this.state;
    const allAlbums = [...albums];
    const albumsDisplay = [];
    allAlbums.forEach((album) => {
      let flag = false;
      album.labels.forEach((label) => {
        if (label === labelDisplayed) {
          flag = true;
        }
      });
      if (flag === true) {
        albumsDisplay.push(album);
      }
      console.log(albumsDisplay);
    });
    this.setState({
      labels,
      albums: albumsDisplay,
    });
  }

  render() {
    const {
      albums,
      page,
      totalPage,
      labels,
      labelDisplayed,
    } = this.state;

    const labelsDisplay = labels.map(label => (
      <NoBorderButton
        key={label}
      >
        <LabelItem
          labelItem={label}
          showClose={false}
        />
      </NoBorderButton>
    ));

    return (
      <div className={classes.userAllLabels}>
        <div className={classes.userAllLabels__title}>
          <p>
            - My Labels -
          </p>
        </div>
        <div className={classes.userAllLabels__labels}>
          {labelsDisplay}
        </div>
        <div className={classes.userAllLabels__mainLabel}>
          <p>
            label chosed:
          </p>
          <LabelItem
            labelItem={labelDisplayed}
            showClose={false}
          />
        </div>
        <AlbumsDisplayWithPage
          albums={albums}
          page={page}
          totalPage={totalPage}
          baseUrl="/user/labels"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.user.albums,
  labels: state.user.labels,
});

export default connect(mapStateToProps)(UserAllLabels);

UserAllLabels.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};
