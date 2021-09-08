import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


    html { 
        --color-primary: #000000;
        --color-secondary: #191919;
        --color-background: #707070;
        --color-copy-background: #303030;
        --color-golden: #DAC960;
        --color-text: #ffffff;
        --color-text-gray: #9B9B9B;

        --size-container: 1100px;

        font-size: 62.5% !important;
        font-family: 'Roboto';
        overflow-x: hidden;

        body::-webkit-scrollbar {
        width: .6rem;               /* width of the entire scrollbar */
        }

        body::-webkit-scrollbar-track {
        background: none; // Background
        }

        body::-webkit-scrollbar-thumb {
        background-color: #505050;
        border-radius: 2rem;       /* roundness of the scroll thumb */
        border: .3rem solid #505050;
        }
            }

     body { 
      background-color: #000;
      
      color: var( --color-text);
      
      font-size: 1.6rem !important;        
      letter-spacing: .03rem !important;
      line-height: 2.4rem !important;

      input[type=text] {
        padding: 0 1rem;
      }

     }

     a {
		font-size: inherit;
		text-decoration: none;
		color: var(--color-text)
	}

    .on-modal-active {
        overflow: hidden
    }


`

export default GlobalStyles