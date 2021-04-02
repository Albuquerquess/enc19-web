import React from 'react';


import { StyledContainer, StyledWrapper } from './styles';

const ComponentContainer: React.FC = ({children}) => {
  return <StyledContainer>
    <StyledWrapper>
      {children}
    </StyledWrapper>
  </StyledContainer>;
}

export default ComponentContainer;