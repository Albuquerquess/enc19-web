import React from 'react';
import ComponentContainer from '../../components/Container';
import Button from '../../components/Button';
// import { Container } from './styles';

const Home: React.FC = () => {
  return <ComponentContainer>
      <Button label="Entrar" goTo="/" golden/>
  </ComponentContainer>
}

export default Home;