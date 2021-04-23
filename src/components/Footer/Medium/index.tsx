import React from 'react';
import { Link } from 'react-router-dom';

// ASSET
import logo from '../../../assets/common/logo/logo branco.svg'
import facebook from '../../../assets/Footer/facebook.svg'
import instagram from '../../../assets/Footer/instagram.svg'
import twitter from '../../../assets/Footer/twitter.svg'

import { FooterContainer } from './styles';

const FooterMedium: React.FC = () => {
  return <FooterContainer>
      <div id="footer">
        <div id="col-1">
            <img src={logo} alt="ENC19"/>
            <p id="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
            <div id="social-media">
              <a href="#"><img src={facebook} alt="Facebook" /></a>
              <a href="#"><img src={instagram} alt="Instagram" /></a>
              <a href="#"><img src={twitter} alt="Twitter" /></a>
            </div>
        </div>
        <div id="col-2">
            <ol>
              <li><Link to="#">HOME</Link></li>
              <li><Link to="#">INFOGRÁFICOS</Link></li>
              <li><Link to="#">GRÁFICOS</Link></li>
              <li><Link to="#">MAPAS</Link></li>
              <li><Link to="#">DASHBOARD</Link></li>
              <li><Link to="#">SOBRE</Link></li>
            </ol>
        </div>
        <div id="col-3">
          <span>INTEGRASUS</span>
          <span>MINISTÉRIO DA SAUDE</span>
          <span>IFCE IGUATU</span>
        </div>
      </div>
      <div id="copy">
        <div id="wrapper">
          <span>2020 Copyright: <strong>ENC-19</strong></span>
          <div id="developers">
            <span>Projeto: <strong>Jonathan Weslley</strong></span>
            <span>Desenvolvimento: <strong>Gustavo Albuquerque</strong></span>
          </div>
        </div>
      </div>
  </FooterContainer>
  
}

export default FooterMedium;