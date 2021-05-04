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
                <span id="contact" >Design: johnw3s@gmail.com</span>
                <span id="contact" >Programador: contato@albuquerquedev.com.br</span>
                <span id="contact" >Geógrafo: leandrolimaisf@gmail.com</span>
            </div>
            <div id="utils">
                <strong className="title">Links úteis</strong>
                <a href="#" id="link" >Integrasus</a>
                <a href="#" id="link" >Ministério da Saúde</a>
                <a href="#" id="link" >IFCE Iguatú</a>
            </div>
            <div id="suggestions">
                <strong className="title">Sujestões</strong>
                <a href="#" id="suggestion" >Sugerir análise</a>
                <a href="#" id="suggestion" >Sugerir funcionalidade</a>
            </div>
            <p id="copy">2020 Copyright: <strong>ENC19.</strong></p>

        </div>
      </div>
  </FooterContainer>;
}

export default FooterSmall;