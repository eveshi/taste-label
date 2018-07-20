import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.css';

const Footer = () => (
  <div className={classes.footer}>
    <div className={classes.footer__links}>
      <p>
        Links
      </p>
      <Link to="/">
        Home
      </Link>
      <Link to="/">
        Blog
      </Link>
      <Link to="/">
        About
      </Link>
    </div>
    <div className={classes.footer__copyright}>
      <p>
        Copyright
      </p>
      <p>
        &copy; 2018 Eve Shi. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
