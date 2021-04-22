import React from 'react'
import Container from '../../Container'
import sidebarIcon from '../../../assets/Navigation/sidebar.svg'

import Sidebar from './Sidebar';

import { NavigationContainer } from './styles';

import pageNames from '../../../utils/pageNames';
import { useLocation } from 'react-router';

const NavigationSmall: React.FC = () => {

  const [active, setActive] = React.useState(false)
  const currentPathName = useLocation().pathname
  const pageName = pageNames[currentPathName]
  

  
  return <Container>
    <Sidebar active={active} setActive={setActive}/>
    <NavigationContainer currentPathName={currentPathName}>
      <span id="page-title">
        {pageName && pageName}
      </span>
      <img src={sidebarIcon} alt="ENC-19" onClick={() => setActive(true)}/>
    </NavigationContainer>
  </Container>;
}

export default NavigationSmall;
