import React from 'react';
import PropTypes from 'prop-types';
import SmallTitleBar from '../../../components/SmallTitleBar/SmallTitleBar';
import LabelItem from '../../../components/LabelItem/LabelItem';
import NoBorderButton from '../../../components/NoBorderButton/NoBorderButton';
import classes from './UserLabels.css';

const UserLabels = (props) => {
  const {
    labels,
  } = props;

  const labelsDisplay = labels.map(label => (
    <NoBorderButton key={label}>
      <LabelItem
        labelItem={label}
        showClose={false}
      />
    </NoBorderButton>
  ));

  return (
    <div className={classes.userLabels}>
      <SmallTitleBar title="label" />
      <div className={classes.userLabels__labels}>
        {labelsDisplay}
      </div>
    </div>
  );
};

UserLabels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserLabels;
