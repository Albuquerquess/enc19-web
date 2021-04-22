import styled from 'styled-components';

export const LestCase = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;

	* {
		padding-bottom: .5rem;
	}
  img {
      width: 3rem;
  }

	span.value {
		color: var(--color-golden);
		font-size: 1.6rem;
		font-weight: 700;
	}
`;
