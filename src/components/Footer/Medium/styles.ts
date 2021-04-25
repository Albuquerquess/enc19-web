import styled from 'styled-components';
import breakpoints from '../../../assets/styles/breakpoints';

export const FooterContainer = styled.div`
  width: 100%;

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  background-color: var(--color-secondary);

  div#footer {
    width: 100%;
    max-width: 700px;
    
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-top: 1rem;

    div#col-1, div#col-2, div#col-3 {
      width: 33%;
      height: 100%;
      min-height: 100%;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    div#col-1 {
      display: flex;
      align-items: flex-start;
      text-align: left;
      font-size: small;
      img {
        width: 8rem;
        margin-bottom: .5rem;
      }

      p#desc {
        width: 90%;
      }

      div#social-media {
        margin-top: 1rem;
        img {
          width: 27px;
          height: auto;
          margin-right: 1rem;
        }        
      }
    }

    div#col-2 {
      ol li {
        padding-bottom: 1rem
      }
    }

    div#col-3 {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      span {
        padding-bottom: 1rem
      }
    }

  }

  div#copy {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-copy-background);

    padding: 1rem 0;
    
    div#wrapper {
      width: 100%;
      max-width: 700px;

      display: flex;
      justify-content: space-between;
      font-size: small;

      div#developers {
        span:first-child {
          margin-right: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: ${breakpoints.mobile}) {
    display: flex
  }
`;
