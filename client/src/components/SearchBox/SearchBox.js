import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import Search from '../../assets/icon/search';
import classes from './SearchBox.css';

const SearchBox = (props) => {
  const {
    onChange,
    onClick,
    placeholder,
    showSearchBox,
    value,
  } = props;

  return (
    <div className={classes.searchBox}>
      <input
        className={
          showSearchBox
            ? classes.searchBox__input
            : classes.searchBox__input_hidden
        }
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className={
          showSearchBox
            ? classes.searchBox__button_left
            : classes.searchBox__button_right
        }
        type="button"
        onClick={onClick}
      >
        <Search />
      </button>
    </div>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  showSearchBox: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBox;
