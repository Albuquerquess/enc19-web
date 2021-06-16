import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButtom } from './styles';

interface buttonProps {
    label: string;
    goTo: string;
    background?: string;
    active?: boolean;
    handleClick?: () => any;
    id?: string 
}

const Button: React.FC<buttonProps> = ({label, goTo, background, active, handleClick, id }) => {
  return <StyledButtom background={background} active={active} key={label} onClick={handleClick} id={id ? id : 'button'}>
    <Link to={goTo} >
      {label}
    </Link>
  </StyledButtom>
}

export default Button;