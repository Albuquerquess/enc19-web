import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButtom } from './styles';

interface butonProps {
    label: string;
    goTo: string;
    golden?: boolean,
    gray?: boolean
}

const Button: React.FC<butonProps> = ({label, goTo, golden, gray, ...props}) => {
  return <Link to={goTo}>
  <StyledButtom golden {...props}>
      {label}
  </StyledButtom>
  </Link>;
}

export default Button;