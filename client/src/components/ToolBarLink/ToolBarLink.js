import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ToolBarLink = (props) => {
  const {
    to,
    children,
  } = props;

  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

ToolBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ToolBarLink;
