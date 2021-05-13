import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints';



export const CardContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 11rem;
  
  margin: 1rem 0;

  picture > *{
      height: 11rem;
      border-radius: .5rem;
  }

  div#content {
      overflow: hidden;
      margin-left: 1.4rem;
      p#content-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-golden);
          margin-bottom: 1rem;
      }

      p#content-description {
        font-size: 1.4rem;
      }

  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    &, picture > * {
      height: 18rem;
    }

    div#content  {
      p#content-title {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      p#content-description {
        font-size: 1.6rem;
      }
    }
  }
`;
