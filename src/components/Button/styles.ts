import styled from 'styled-components';

interface  styleButtonProps {
  golden?: boolean;
  gray?: boolean
}

export const StyledButtom = styled.button<styleButtonProps>`
  a {
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    color: var(--color-primary)
  }
  width: 100%;
  height: auto;

  height: auto;
  border-radius: .5rem;
  background-color: ${props => props.golden ? 'var(--color-golden)' : 'var(--color-secondary)'};
`;
