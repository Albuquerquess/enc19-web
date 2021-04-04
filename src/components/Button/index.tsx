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
  return <StyledButtom golden {...props}>
    <Link to={goTo}>
      {label}
    </Link>
  </StyledButtom>
}

export default Button;