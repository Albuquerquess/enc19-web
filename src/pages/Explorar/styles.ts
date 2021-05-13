import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints';

import zIndex from '../../assets/styles/z-index'

interface ExploreContainerProps {
    numberOfCategories: number
}

export const ExplorerContainer = styled.div<ExploreContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

    div#button-container {
        width: 100%;

        display: grid;
        grid-template-columns: ${props => `repeat(${props.numberOfCategories}, 1fr)`};
        grid-template-rows: 1fr;
        gap: 2rem;

        button {
            /* width: 22%; */
            height: 6rem;
            font-size: 1vmax;
        }
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        div#button-container {
            margin-top: 2rem;
        }
        div#button-container > button {
            height: 8rem;
        }
    }

`;

interface ExplorerMainProps {
    onSearch: boolean;
}

export const ExplorerMain = styled.div<ExplorerMainProps>`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;




    /* onSearch... */

    div#search-small, div#search-large {
        span {
            font-size: 2.4rem;
            font-weight: 700;
        }

        input#search-input {

            width: 100%;
            height: 3.5rem;

            background-color: var(--color-background);
            border: none;
            border-radius: 2.5rem;

            color: var(--color-text);
            font-size: 1.8rem;

            ::placeholder {
                color: var(--color-text)
            }
        }


        img {    
              height: 3.5rem;
              position: absolute;
            }
    }

    div#search-small {
            width: 100%;
            display: flex;

            justify-content: space-between;
            justify-content: ${props => props.onSearch && 'flex-end'};
            align-items: center;
            
            img {
                position: ${props => !(props.onSearch) && 'initial' };
            }

            
        }

        div#search-large {
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                font-size: 2.8rem;
            }

            div#search-lenguage-input-container {
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                position: relative;

                input {
                    border-radius: .5rem;
                }

                img {
                    height: 3rem;
                }
            }
        }
    
        @media screen and (min-width: ${breakpoints.tablet}) {
            div#search-small {
                display: none
            }
            div#search-large {
                display: flex
            }
        }
        @media screen and (max-width: ${breakpoints.mobile}) {
            div#search-small {
                display: flex
            }
            div#search-large {
                display: none
            }
        }
        
            
    /* Finalizar desensolvimento do /explorer finalizando o input e dando continuidade */

`
