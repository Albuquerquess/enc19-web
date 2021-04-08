import React from 'react';

import { BackgroundContainer } from './styles';

const Background: React.FC = ({children}) => {
  return <BackgroundContainer>
      {children}
  </BackgroundContainer>;
}

export default Background;