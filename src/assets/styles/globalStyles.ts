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

        font-size: 62.5%;
        font-family: 'Roboto';

     }

     body { 
      background-color: var( --color-primary);
      color: var( --color-text);
      font-size: 1.4rem;        

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