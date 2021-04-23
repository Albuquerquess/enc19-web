import styled from 'styled-components';
import breakpoints from '../../../assets/styles/breakpoints';

export const FooterContainer = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    text-align: center;
    color: var(--color-text-gray);
    font-size: .8rem;

    a {
        color: var(--color-text-gray);
    }

    div#footer-wrapper {
        width: 100%;

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

            & > span#title {
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

            img#footer-logo {
                width: 10rem;
            }

            hr {
                width: 35%;
                border-color: var(--color-golden);
            }

            div#contacts, div#utils, div#suggestions {
                display: flex;
                flex-direction: column;
            }

            div#contacts > span#contact, div#utils > a#link, div#suggestions > a#suggestion  {
                margin-bottom: .2rem;
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



  @media screen and (min-width: ${breakpoints.mobile}) {
    display: none
  }
`;
