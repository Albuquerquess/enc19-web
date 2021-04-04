import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container'
import Logo from "../../components/Logo";

import { WelcomeMain } from './styles';

const Welcome: React.FC = () => {
  return <Container>
    <WelcomeMain>
      <div id="logo-button-wrapper">
        <Logo />
        <hr />
        <Button label="Entrar" goTo="/home"/>
      </div>
      <span id="CTAcadastro">
          Novo aqui? <Link to="/cadastro"><strong>Cadastrar-se</strong></Link>
      </span>
    </WelcomeMain>
  </Container>
}

export default Welcome;