import React from 'react';
import Button from '../../components/Button';
import Logo from '../../assets/common/logo/logo branco.svg';

import { WelcomeContainer, WelcomeMain, CTA } from './styles';

const Welcome: React.FC = () => {
  return <WelcomeContainer>
    <WelcomeMain>
      <img src={Logo} alt="Logo"/>
      <hr />
      <Button label="ENTRAR" goTo="/home" active />
    </WelcomeMain>
    <CTA>
      <span>Novo por aqui? <strong>Cadastre-se</strong></span>
    </CTA>
  </WelcomeContainer>;
}

export default Welcome;