import styled from 'styled-components';

interface  styleButtonProps {
  golden?: boolean;
  gray?: boolean
}

export const StyledButtom = styled.button<styleButtonProps>`
  width: 100%;
  min-width: 70px;
  min-height: 60px;
  height: auto;
  border-radius: .5rem;
  background-color: ${props => props.golden ? 'var(--color-golden)' : 'var(--color-secondary)'};
`;
