import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import search from '../../assets/icon/search.svg';
import home from '../../assets/icon/home.svg';
import user from '../../assets/icon/user.svg';

class ToolBar extends PureComponent {
  state = {
    searchIcon: {
      src: search,
      alt: 'search icon',
    },
    homeIcon: {
      src: home,
      alt: 'home icon',
    },
    userIcon: {
      src: user,
      alt: 'user icon',
    },
  }

  render() {
    const {
      searchIcon,
      homeIcon,
      userIcon,
    } = this.state;
    const { children } = this.props;
    return (
      <div>
        <div>
          <img
            src={searchIcon.src}
            alt={searchIcon.alt}
          />
          <img
            src={homeIcon.src}
            alt={homeIcon.alt}
          />
          <img
            src={userIcon.src}
            alt={userIcon.alt}
          />
        </div>
        {children}
      </div>
    );
  }
}

ToolBar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ToolBar;
