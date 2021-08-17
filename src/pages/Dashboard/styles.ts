import styled from 'styled-components';
import breakpoints from '../../assets/styles/breakpoints';

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  margin-top: 5rem;

  section.chart-wrapepr {
    width: 100%;
    margin-bottom: 4rem;
    
  }

  div#button-container {
        width: 100%;

        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: 1fr;
        gap: 2rem;

        margin-bottom: 4rem;

        button {
            width: 100%;
            height: 6rem;
            font-size: 1vmax;
        }
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
        div#button-container {
            margin-top: 2rem;
        }
        div#button-container > button {
            height: 8rem;
        }
    }
  
`;
