import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  div#button-container {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 2rem;

    button {
        /* width: 22%; */
        height: 6rem;
        font-size: 1vmax;
    }
    }

  
`;
