import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints'

export const WelcomeMain = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div#logo-button-wrapper {
    width: 100%;
    margin-bottom: 4rem; 

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    
    hr {
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 4rem;
      
    }
  }

  button {
    width: 100%;
    height: 5rem;
  }

  span#CTAcadastro {
    position: absolute;
    bottom: 2rem;
  }

`;


