import styled from 'styled-components';
import breakpoints from '../../../assets/styles/breakpoints';
import pageFooterless from '../../../utils/pageFooterless';
import pageWidthNavigation from '../../../utils/pageWIthNavigation';

interface FooterContainerProps {
    currentPathName: string
}

export const FooterContainer = styled.div<FooterContainerProps>`
    width: 100vw;

    display: ${props => pageFooterless.includes(props.currentPathName) ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    
    text-align: center;
    color: var(--color-text-gray);
    font-size: 1.4rem;

    a {
        color: var(--color-text-gray);
    }

    div#footer-wrapper {
        width: 100%;flex

        span#title {
            margin: 1rem 0;
            
            color: var(--color-text);
            
            font-weight: 700;
            font-size: 1rem;
        }


        div#social-media{
            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 1rem 0;

            background-color: var(--color-secondary);

            span.title {
                color: var(--color-text-gray);
                font-weight: normal;
                margin-bottom: .5rem;
            }

            span#icons {
                width: 100%;

                img {
                    width: 2rem;
                    margin-right: 1rem;
                }
                
            }
        }

        div#footer {
            margin-top: 1rem;

            strong.title {
                color: var(--color-text);
                margin-bottom: 1rem;
                font-size: 1.8rem;
            }

            img#footer-logo {
                width: 12rem;
            }

            hr {
                width: 20%;
                border-color: var(--color-golden);
                margin-bottom: 2rem;
            }

            div#contacts, div#utils, div#suggestions {
                display: flex;
                flex-direction: column;
                margin-bottom: 2rem;
            }

            div#contacts > span#contact, div#utils > a#link, div#suggestions > a#suggestion  {
                margin-bottom: .5rem;
            }

            
        }

        p#copy {
            width: 100vw;
            padding: 1rem 0;
            margin-top: 1rem;
            margin-bottom: 2rem;

            background-color: var(--color-secondary);
        }
    }

    /* Finalizar reconstrução do footer de grandes telas, refatorar Modal e ir para /explorar */



  @media screen and (min-width: ${breakpoints.mobile}) {
    display: none
  }
`;
