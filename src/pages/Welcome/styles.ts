import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints';

export const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow: hidden;

`;

export const WelcomeMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 80%;
  max-width: 400px;

  margin-bottom: 10rem;


  img {
      
      width: 15rem;
  }

  hr {
      width: 100%;
      border: 1px solid var(--color-background);
      margin-top: 3rem;
      margin-bottom: 4rem;
    
  }

  button {
      width: 100%;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    img {
        width: 28rem;
    }

    hr {
        margin-top: 4rem;
        margin-bottom: 6rem;
    }

    button {
        height: 7rem;
        font-size: 3rem;
    }
  }
`;

export const CTA = styled.span`
    display: flex; // until the next update
    position: fixed;
    bottom: 3rem;
    color: var(--color-background);

    strong {
        color: var(--color-text);
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        font-size: 2.4rem;
        bottom: 6rem;
    }
`