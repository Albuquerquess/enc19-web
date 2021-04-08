import React from 'react';
import breakpoints from '../../assets/styles/breakpoints';

import { CardContainer } from './styles';

interface cardProps {
    image: string[];
    title: string;
    description: string;
}

const Card: React.FC<cardProps> = ({ image, title, description }) => {
    
  return <CardContainer>
      <picture>
        <source media={`(max-width:${breakpoints.mobile})`} srcSet={image[0]} />
        <img src={image[1]} alt=""/>
      </picture>

      <div id="content">
          <p id="content-title" >{title}</p>
          <p>{description}</p>
      </div>
  </CardContainer>;
}

export default Card;