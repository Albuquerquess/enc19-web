import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints';

export const LastCase = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;

	* {
		padding-bottom: .5rem;
	}
  img {
      width: 5rem;
  }

  span.title {
	  font-size: 1.8rem;
  }

	span.value {
		color: var(--color-golden);
		font-size: 2.6rem;
		font-weight: 700;
	}

	@media screen and (min-width: ${breakpoints.tablet}) {
		* {
		padding-bottom: 1.4rem;
	}

		img {
			width: 8rem;
		}

		
	}
`;
