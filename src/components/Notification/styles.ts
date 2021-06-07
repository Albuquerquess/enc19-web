import styled from 'styled-components';

interface NofiticationContainerProps {
    display: boolean
}

export const NofiticationContainer = styled.div<NofiticationContainerProps>`
  width: 100vw;
  height:  '0';
  height:  ${props => props.display && '5rem'};
  transition: height 1s;
  background-color: var(--color-golden);

  color: var(--color-primary);

  display: ${props => props.display === true ?  'flex' : 'none'};
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  font-weight: 700;

  position: fixed;
  top: 0;
`;
