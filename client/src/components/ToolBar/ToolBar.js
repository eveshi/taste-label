import React, { PureComponent } from 'react';
import home from '../../assets/icon/home.svg';
import user from '../../assets/icon/user.svg';
import SearchBox from '../SearchBox/SearchBox';
import ToolBarLink from '../ToolBarLink/ToolBarLink';
import classes from './ToolBar.css';

class ToolBar extends PureComponent {
  state = {
    searchValue: '',
    showSearchBox: false,
  }

  searchChangeHandler = (event) => {
    const { value } = event.target;
    this.setState({
      searchValue: value,
    });
  }

  searchClickHandler = () => {
    const { showSearchBox } = this.state;
    this.setState({
      showSearchBox: !showSearchBox,
    });
  }

  render() {
    const {
      searchChangeHandler,
      searchClickHandler,
    } = this;
    const {
      searchValue,
      showSearchBox,
    } = this.state;
    return (
      <div className={classes.toolBar}>
        <div className={classes.toolBar__icon}>
          <p>
            tastelabel
          </p>
        </div>
        <div className={classes.toolBar__menu}>
          <SearchBox
            onChange={searchChangeHandler}
            onClick={searchClickHandler}
            placeholder="Album/Song/Artist"
            showSearchBox={showSearchBox}
            value={searchValue}
          />
          <ToolBarLink
            to="/"
            imgSrc={home}
            alt="home"
          />
          <ToolBarLink
            to="/"
            imgSrc={user}
            alt="user"
          />
        </div>
      </div>
    );
  }
}

export default ToolBar;
