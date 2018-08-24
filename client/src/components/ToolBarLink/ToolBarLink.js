import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Link } from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import PropTypes from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';

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
