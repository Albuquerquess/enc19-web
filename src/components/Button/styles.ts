import styled from 'styled-components';

interface  styleButtonProps {
  background?: string,
  active?: boolean;
}

export const StyledButtom = styled.button<styleButtonProps>`

  border-radius: .5rem;

  background-color: var(--color-secondary);
  background-color: ${props => props.active && '#dac960'};

  /* if u want a new background color, put color on background prop */
  background-color: ${props => props.background && props.background};

  padding: 1rem;

  font-size: 100%;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: var(--color-text);
    color: ${props => props.active && 'var(--color-primary)' };
    
    width: auto;
    height: auto;
  }
`;
