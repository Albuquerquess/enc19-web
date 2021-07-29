import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// ASSET
import logo from '../../../assets/common/logo/logo branco.svg'
import facebook from '../../../assets/Footer/facebook.svg'
import instagram from '../../../assets/Footer/instagram.svg'
import twitter from '../../../assets/Footer/twitter.svg'

import { FooterContainer } from './styles';

const FooterMedium: React.FC = () => {

  const currentPathName = useLocation().pathname

  return <FooterContainer currentPathName={currentPathName}>
      <div id="footer">
        <div id="col-1">
            <img src={logo} alt="ENC19"/>
            <p id="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
            <div id="social-media">
              <a href="https://www.facebook.com/geografia.licenciatura.948" target="_blank"><img src={facebook} alt="Facebook" /></a>
              <a href="https://www.instagram.com/geografiaiguatu/" target="_blank"><img src={instagram} alt="Instagram" /></a>
            </div>
        </div>
        <div id="col-2">
            <ol>
              <li><Link to="/home">HOME</Link></li>
              <li><Link to="/explorar/infografico">INFOGRÁFICOS</Link></li>
              <li><Link to="/explorar/grafico">GRÁFICOS</Link></li>
              <li><Link to="/explorar/mapa">MAPAS</Link></li>
              <li><Link to="/explorar/infografico">DASHBOARD</Link></li>
              <li><Link to="/sobre">SOBRE</Link></li>
            </ol>
        </div>
        <div id="col-3">
          <a href="https://integrasus.saude.ce.gov.br/#/home" target="_blank">INTEGRASUS</a>
          <a href="https://www.gov.br/saude/pt-br" target="_blank">MINISTÉRIO DA SAUDE</a>
          <a href="https://ifce.edu.br/iguatu/imagens/galeria_fotos/album" target="_blank">IFCE IGUATU</a>
        </div>
      </div>
      <div id="copy">
        <div id="wrapper">
          <span>2020 Copyright: <strong>ENC-19</strong></span>
          <div id="developers">
            <span>Projeto: <a target="_blank" href="">Jonathan Weslley</a></span>
            <span>Desenvolvimento e Infraestrutura: <a target="_blank" href="https://wa.me/message/EVJPT6VSSMRPD1">Gustavo Albuquerque</a></span>
          </div>
        </div>
      </div>
  </FooterContainer>
  
}

export default FooterMedium;