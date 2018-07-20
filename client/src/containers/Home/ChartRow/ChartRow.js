import React from 'react';
import PropTypes from 'prop-types';
import SingleItem from '../../../components/SingleItem/SingleItem';
import classes from './ChartRow.css';

const ChartRow = (props) => {
  const {
    list,
    chartName,
  } = props;

  const itemList = Object.keys(list).map(key => (
    <SingleItem
      albumCoverSrc={list[key].albumCoverSrc}
      albumName={list[key].albumName}
      musician={list[key].musician}
      year={list[key].year}
      genres={list[key].genres}
      rating={list[key].rating}
    />
  ));

  return (
    <div className={classes.chartRow}>
      <div className={classes.chartRow__header}>
        <p>
          {chartName}
        </p>
      </div>
      <div className={classes.chartRow__items}>
        {itemList}
      </div>
    </div>
  );
};

ChartRow.propTypes = {
  list: PropTypes.node.isRequired,
  chartName: PropTypes.string.isRequired,
};

export default ChartRow;
