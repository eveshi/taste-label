import React from 'react';
import PropTypes from 'prop-types';
import SingleItem from '../../../components/SingleItem/SingleItem';
import classes from './ChartRow.scss';

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
      <p>
        {chartName}
      </p>
      {itemList}
    </div>
  );
};

ChartRow.propTypes = {
  list: PropTypes.node.isRequired,
  chartName: PropTypes.string.isRequired,
};

export default ChartRow;
