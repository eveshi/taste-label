import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ToolBarLink = (props) => {
  const {
    to,
    imgSrc,
    alt,
  } = props;

  return (
    <Link to={to}>
      <img
        src={imgSrc}
        alt={alt}
      />
    </Link>
  );
};

ToolBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ToolBarLink;
