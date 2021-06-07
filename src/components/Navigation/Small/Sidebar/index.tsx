import React from 'react';

import { SidebarContainer, SidebarWrapper } from './styles';

import closeSidebarIcon from '../../../../assets/Navigation/close sidebar.svg'
import dashboardIcon from '../../../../assets/common/Dashboard.svg'
import dashboardActiveIcon from '../../../../assets/common/pageIcons/Dashboard - ativo.svg'
import graphIcon from '../../../../assets/common/pageIcons/Gráficos.svg'
import graphActiveIcon from '../../../../assets/common/pageIcons/Gráficos - ativo.svg'
import homeIcon from '../../../../assets/common/pageIcons/Home.svg'
import homeActiveIcon from '../../../../assets/common/pageIcons/Home - ativo.svg'
import infographIcon from '../../../../assets/common/pageIcons/Infográficos.svg'
import infographActiveIcon from '../../../../assets/common/pageIcons/Infográficos - ativo.svg'
import mapIcon from '../../../../assets/common/pageIcons/Mapas.svg'
import mapActiveIcon from '../../../../assets/common/pageIcons/Mapas - ativo.svg'
import aboutIcon from '../../../../assets/common/pageIcons/Sobre.svg'
import aboutActiveIcon from '../../../../assets/common/pageIcons/Sobre - ativo.svg'
import { Link } from 'react-router-dom';

interface sidebarProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<sidebarProps> = ({active, setActive}) => {
  return <SidebarContainer onClick={() => setActive(false)} active={active}>
      
      <SidebarWrapper active={active}>
          <img src={closeSidebarIcon} id="sidebar-close" alt="FECHAR"/>
        <div id="sidebar-page-icons-wrapper">
            <ul>
                <li className="sidebar-page-icon">
                    <Link to="/home">
                        <img src={homeActiveIcon} alt="Home"/>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="sidebar-page-icon">
                    <Link to="/dashboard">
                        <img src={dashboardActiveIcon} alt="Home"/>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="sidebar-page-icon">
                    <Link to="/explorar/grafico">
                        <img src={graphActiveIcon} alt="Home"/>
                        <span>Gráficos</span>
                    </Link>
                </li>
                <li className="sidebar-page-icon">
                    <Link to="/explorar/infografico">
                        <img src={infographActiveIcon} alt="Home"/>
                        <span>Infográficos</span>
                    </Link>
                </li>
                <li className="sidebar-page-icon">
                    <Link to="/explorar/mapa">
                        <img src={mapActiveIcon} alt="Home"/>
                        <span>Mapas</span>
                    </Link>
                </li>
                <li className="sidebar-page-icon">
                    <Link to="/sobre">
                        <img src={aboutActiveIcon} alt="Home"/>
                        <span>Sobre</span>
                    </Link>
                </li>
            </ul>
        </div>
      </SidebarWrapper>
  </SidebarContainer>;
}

export default Sidebar;