import React, { PureComponent } from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import Home from '../../assets/icon/home';
import User from '../../assets/icon/user';
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
          <ToolBarLink to="/">
            <Home />
          </ToolBarLink>
          <ToolBarLink to="/">
            <User />
          </ToolBarLink>
        </div>
      </div>
    );
  }
}

export default ToolBar;
