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
import pageNames from '../../../utils/pageNames';

const NavigationMedium: React.FC = () => {
  const currentPathName = useLocation().pathname
  const pageName = pageNames[currentPathName]
    
    
  return <Container>
      <NavigationContainer currentPathName={currentPathName}>
        <span id="navigation-title">
            {pageName}
        </span>
        <nav id="navigation-icon-group">
            <Link to="/home"><img src={pageName === 'Home' ? homeActiveIcon: homeIcon} alt="HOME" onClick={() => {}} /></Link>
            <Link to="/conteudo/infograficos"><img src={pageName === 'Infográficos' ? infographActiveIcon: infographIcon} alt="HOME" onClick={() => {}} /></Link>
            <Link to="/conteudo/graficos"><img src={pageName === 'Gráficos' ? graphActiveIcon: graphIcon} alt="HOME" onClick={() => {}} /></Link>
            <Link to="/conteudo/mapas"><img src={pageName === 'Mapas' ? mapActiveIcon: mapIcon} alt="HOME" onClick={() => {}} /></Link>
            <Link to="/conteudo/dashboard"><img src={pageName === 'Dashboard' ? dashboardActiveIcon: dashboardIcon} alt="HOME" onClick={() => {}} /></Link>
            <Link to="/sobre"><img src={pageName === 'Sobre' ? aboutActiveIcon: aboutIcon} alt="HOME" onClick={() => {}} /></Link>

        </nav>
      </NavigationContainer>
  </Container>;
}

export default NavigationMedium;