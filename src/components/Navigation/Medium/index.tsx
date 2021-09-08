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

// Capitalize
import Capitalize from '../../../utils/Captalize';


const NavigationMedium: React.FC = () => {
  const currentPathName = useLocation().pathname
  const pageName = (pageNames[currentPathName]).toLowerCase()

  return <Container>
      <NavigationContainer currentPathName={currentPathName}>
        <span id="navigation-title">
            {Capitalize(pageName)}
        </span>
        <nav id="navigation-icon-group">
            <Link to="/home"><img src={pageName === 'Home' ? homeActiveIcon: homeIcon} alt="HOME" onClick={() => {}} /></Link>
            <Link to="/explorar/infografico"><img src={pageName === 'Infográficos' ? infographActiveIcon: infographIcon} alt="INFOGRÁFICOS" onClick={() => {}} /></Link>
            <Link to="/explorar/grafico"><img src={pageName === 'Gráficos' ? graphActiveIcon: graphIcon} alt="GRÁFICOS" onClick={() => {}} /></Link>
            <Link to="/explorar/mapa"><img src={pageName === 'Mapas' ? mapActiveIcon: mapIcon} alt="MAPAS" onClick={() => {}} /></Link>
            <Link to="/dashboard/mundo"><img src={pageName === 'Dashboard' ? dashboardActiveIcon: dashboardIcon} alt="DASHBOARD" onClick={() => {}} /></Link>
            <Link to="/sobre"><img src={pageName === 'Sobre' ? aboutActiveIcon: aboutIcon} alt="SOBRE" onClick={() => {}} /></Link>

        </nav>
      </NavigationContainer>
  </Container>;
}

export default NavigationMedium;