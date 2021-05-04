import styled from 'styled-components';

interface styleBoxProps {
    withSubtitle: boolean;
}

export const BoxContainer = styled.div<styleBoxProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: left;

  margin: 1rem 0;

  span#box-title, span#box-subtitle {
    font-weight: 700;
    
  }

  span#box-title {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  span#box-subtitle {
    font-size: 2rem;
    color: var(--color-golden);
    margin-bottom: ${props => props.withSubtitle && '1rem'};
  }

  
`;
