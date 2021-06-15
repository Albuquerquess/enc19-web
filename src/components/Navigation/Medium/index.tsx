import React from 'react';
import Container from '../../Container';

import { NavigationContainer } from './styles';

import dashboardIcon from '../../../assets/common/pageIcons/Dashboard.svg'
import dashboardActiveIcon from '../../../assets/common/pageIcons/Dashboard - ativo.svg'
import graphIcon from '../../../assets/common/pageIcons/Gráficos.svg'
import graphActiveIcon from '../../../assets/common/pageIcons/Gráficos - ativo.svg'
import homeIcon from '../../../assets/common/pageIcons/Home.svg'
import homeActiveIcon from '../../../assets/common/pageIcons/Home - ativo.svg'
import infographIcon from '../../../assets/common/pageIcons/Infográficos.svg'
import infographActiveIcon from '../../../assets/common/pageIcons/Infográficos - ativo.svg'
import mapIcon from '../../../assets/common/pageIcons/Mapas.svg'
import mapActiveIcon from '../../../assets/common/pageIcons/Mapas - ativo.svg'
import aboutIcon from '../../../assets/common/pageIcons/Sobre.svg'
import aboutActiveIcon from '../../../assets/common/pageIcons/Sobre - ativo.svg'

import { Link, useLocation } from 'react-router-dom';
import pageNames from '../../../utils/content/pageNames';

const NavigationMedium: React.FC = () => {
  const currentPathName = useLocation().pathname
  console.log('currentPathName -- ', currentPathName)
  const pageName = (pageNames[currentPathName]).toLowerCase()
  console.log('pageName -- ',pageName)

  return <Container>
      <NavigationContainer currentPathName={currentPathName}>
        <span id="navigation-title">
            {pageName}
        </span>
        <nav id="navigation-icon-group">
            <Link to="/home">
              <img src={pageName === 'home' ? homeActiveIcon: homeIcon} alt="HOME" />
            </Link>
            <Link to="/explorar/infografico">
              <img src={pageName === 'infográficos' ? infographActiveIcon: infographIcon} alt="INFOGRÁFICOS" />
            </Link>
            <Link to="/explorar/grafico">
              <img src={pageName === 'gráficos' ? graphActiveIcon: graphIcon} alt="GRÁFICOS" />
            </Link>
            <Link to="/explorar/mapa">
              <img src={pageName === 'mapas' ? mapActiveIcon: mapIcon} alt="MAPAS" />
            </Link>
            <Link to="#" >
              <img src={pageName === 'Dashboard' ? dashboardActiveIcon: dashboardIcon} alt="DASHBOARD" style={{cursor: 'alias'}} />
            </Link>
            <Link to="/sobre">
              <img src={pageName === 'sobre' ? aboutActiveIcon: aboutIcon} alt="SOBRE" />
            </Link>
        </nav>
      </NavigationContainer>
  </Container>;
}

export default NavigationMedium;