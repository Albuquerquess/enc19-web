import styled from 'styled-components';



export const CardContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 8.5rem;
  
  margin: 1rem 0;

  picture > *{
      height: 8.5rem;
  }

  div#content {
      overflow: hidden;
      margin-left: 1rem;
      p#content-title {
          font-weight: 700;
          color: var(--color-golden);
          margin-bottom: 1rem;
      }

      p#content-description {
        font-size: 10px;
      }

  }
`;
