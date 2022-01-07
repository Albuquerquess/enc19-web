import React from 'react';

import { FooterContainer } from './styles';

// ASSET
import logo from '../../../assets/common/logo/logo branco.svg'
import facebook from '../../../assets/Footer/facebook.svg'
import instagram from '../../../assets/Footer/instagram.svg'
import twitter from '../../../assets/Footer/twitter.svg'
import { Link, useLocation } from 'react-router-dom';


const FooterSmall: React.FC = () => {

  const currentPathName = useLocation().pathname
    
  return <FooterContainer currentPathName={currentPathName}>
      <div id="footer-wrapper">
        <div id="social-media">
            <span className="title">Mantenha-se conectado conosco!</span>
            <span id="icons">
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
            </span>
        </div>
        <div id="footer">
            <img id="footer-logo" src={logo} alt="ENC19"/>
            <hr/>
            <div id="contacts">
                <strong className="title">Contatos</strong>
                <span id="contact" ><strong>Design:</strong> <a target="_blank" href="https://www.behance.net/johnw3s">Jonathan Weslley</a></span>
                <span id="contact" ><strong>Desenvolvimento e Infraestrutura:</strong> <a target="_blank" href="https://wa.me/message/EVJPT6VSSMRPD1">Gustavo Albuquerque</a></span>
            </div>
            <div id="utils">
                <strong className="title">Links úteis</strong>
                <a href="https://integrasus.saude.ce.gov.br/#/home" target="_blank" id="link" >Integrasus</a>
                <a href="https://www.gov.br/saude/pt-br" target="_blank" id="link" >Ministério da Saúde</a>
                <a href="https://ifce.edu.br/iguatu" target="_blank" id="link" >IFCE Iguatú</a>
            </div>
            <p id="copy">2020 Copyright: <strong>ENC19.</strong></p>

        </div>
      </div>
  </FooterContainer>;
}

export default FooterSmall;