import styled from 'styled-components';
import breakpoints from '../../../assets/styles/breakpoints';
import pageFooterless from '../../../utils/pageFooterless';

interface FooterContainerProps {
  currentPathName: string
}

export const FooterContainer = styled.div<FooterContainerProps>`
  width: 100vw;

  display: ${props => pageFooterless.includes(props.currentPathName) ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  background-color: var(--color-secondary);

  

  div#footer {
    width: 100%;
    max-width: var(--size-container);
    
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 2rem 0;

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
      
      img {
        width: 12rem;
        margin-bottom: 1.5rem;
      }

      p#desc {
        width: 90%;
        font-size: 1.4rem;
      }

      div#social-media {
        margin-top: 2rem;
        img {
          width: 3rem;
          height: auto;
          margin-right: 2rem;
        }        
      }
    }

    div#col-2, div#col-3 {
      font-size: 2rem;
    }


    div#col-2 {
      ol li {
        margin-bottom: 2rem
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
      max-width: var(--size-container);

      display: flex;
      justify-content: space-between;
      font-size: small;

      font-size: 1.4rem;

      div#developers {
        span:first-child {
          margin-right: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    display: none
  }
`;
