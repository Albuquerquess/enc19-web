import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButtom } from './styles';

interface buttonProps {
    label: string;
    goTo?: string;
    background?: string;
    active?: boolean;
    handleClick?: () => any;
}

const Button: React.FC<buttonProps> = ({label, goTo, background, active, handleClick }) => {
  return <StyledButtom background={background} active={active} key={label} onClick={handleClick}>
    <Link to={goTo || '#'} >
      {label}
    </Link>
  </StyledButtom>
}

export default Button;