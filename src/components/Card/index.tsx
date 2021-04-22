import React from 'react';
import breakpoints from '../../assets/styles/breakpoints';
import Modal from '../Modal';

import { CardContainer } from './styles';


interface cardProps {
    image: string[];
    title: string;
    description: string;
    modal?: boolean;
}

const Card: React.FC<cardProps> = ({ image, title, description, modal }) => {
  const [active, setActive] = React.useState(false)

  
    
  return <>
    <CardContainer onClick={() => {if (modal) setActive(true)}} >
      <picture>
        <source media={`(max-width:${breakpoints.mobile})`} srcSet={image[0]} />
        <img src={image[1]} alt=""/>
      </picture>

      <div id="content">
          <p id="content-title" >{title}</p>
          <p>{description}</p>
      </div>
  
  </CardContainer>
  <Modal image={image}
         title={title}
         description={description}
         active={active}
         setActive={setActive}
         />
         
   </>
}

export default Card;