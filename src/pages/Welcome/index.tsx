import styled from "styled-components";

import React from 'react';
import Container from '../../components/Container'
import Logo from "../../components/Logo";

import { Line, CTACadastro } from './styles';

const Welcome: React.FC = () => {
  return <Container>
      <Logo />
      <Line />
      <Button label='ENTRAR' color="#dac960"/>
      <CTACadastro>
          Novo aqui? <strong>Cadastrar-se</strong>
      </CTACadastro>

  </Container>;
}

export default Welcome;