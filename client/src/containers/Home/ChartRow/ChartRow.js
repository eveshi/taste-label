import React from 'react';
import PropTypes from 'prop-types';
import SingleItem from '../../../components/SingleItem/SingleItem';
import classes from './ChartRow.css';

const ChartRow = (props) => {
  const {
    list,
    chartName,
  } = props;

  const itemList = list.map(item => (
    <SingleItem
      key={item.id}
      albumCoverSrc={item.albumCoverSrc}
      albumName={item.albumName}
      musician={item.musician}
      year={item.year}
      genres={item.genres}
      rating={item.rating}
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
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  chartName: PropTypes.string.isRequired,
};

export default ChartRow;
