import React from 'react';
import Container from '../../components/Container'
import Logo from "../../components/Logo";

import { Line, CTACadastro } from './styles';

const Welcome: React.FC = () => {
  return <Container>
      <Logo />
      <Line />
      
      <CTACadastro>
          Novo aqui? <strong>Cadastrar-se</strong>
      </CTACadastro>

  </Container>;
}

export default Welcome;