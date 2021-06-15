import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints';

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 1.5rem;

  nav {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    margin-bottom: 1rem;

    img {
        width: 25%;
        height: auto;
        border-radius: 50%;

        margin-right: 2rem;

    }

    div.infos {
      h1 {
        font-size: 2.4rem;
        color: var(--color-golden);
        font-weight: 700
    }

    span {
        font-size: 1.6rem;
    }
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    nav {
      align-items: flex-start;
      img {
        width: 10rem;
      }
      div.infos {
        margin-top: 1rem;
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
`;
