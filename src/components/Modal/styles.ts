import styled from 'styled-components';
import { fadeIn, fadeOut } from '../../assets/styles/fade';
import zIndex from '../../assets/styles/z-index';

interface styleModalProps {
  active: boolean
}

export const ModalContainer = styled.div<styleModalProps>`
  display: ${props => props.active ? 'flex' : 'none'};
  justify-content: center;

  width: 100%;
  
  height: 100vh;
  
  background-color: var(--color-primary);

  position: fixed;
  top: 0;
  right: 0;

  visibility: ${props => props.active ? 'visible' : 'hidden'};
  animation: ${props => props.active ? fadeIn : fadeOut} .1s linear;
  transition: visibility 1s linear;  

  div.modal-wrapper {
    width: 95%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 2rem 0;
    /* overflow: scroll; */

    div#modal-content {
      p#modal-content-title {
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--color-golden);
        margin: 1rem 0;

      }
    }

    

  }

`;
