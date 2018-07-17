import React, { PureComponent } from 'react';
import search from '../../assets/icon/search.svg';
import user from '../../assets/icon/user.svg';
import classes from './ToolBar.css';

class ToolBar extends PureComponent {
  state = {
    searchIcon: {
      src: search,
      alt: 'search icon',
    },
    userIcon: {
      src: user,
      alt: 'user icon',
    },
  }

  render() {
    const {
      searchIcon,
      userIcon,
    } = this.state;
    return (
      <div className={classes.toolBar}>
        <div className={classes.toolBar__icon}>
          <p>
            tastelabel
          </p>
        </div>
        <div className={classes.toolBar__menu}>
          <img
            src={searchIcon.src}
            alt={searchIcon.alt}
          />
          <img
            src={userIcon.src}
            alt={userIcon.alt}
          />
        </div>
      </div>
    );
  }
}

export default ToolBar;
