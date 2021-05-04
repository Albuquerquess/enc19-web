import React from 'react';
import { BoxContainer } from './styles';

interface boxProps {
  title?: string;
  subtitle?: string;
}

const Box: React.FC<boxProps> = ({children, title, subtitle}) => {
  return <BoxContainer withSubtitle={Boolean(subtitle)}>
    <span id="box-title">
      {title}
    </span>
    <span id="box-subtitle">
      {subtitle}
    </span>
      {children}
  </BoxContainer>;
}

export default Box;