import styled from 'styled-components';
import breakpoints from '../../../assets/styles/breakpoints';
import pageWidthNavigation from '../../../utils/pageWIthNavigation';

interface NavigationContainerProps {
    currentPathName: string
  }

export const NavigationContainer = styled.div<NavigationContainerProps>`
    width: 100%;
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    

    span#navigation-title {
        font-weight: 700;
        font-size: 1.8rem;
    }
    nav#navigation-icon-group {
        width: 60%;
        max-width: 340px;

        display: flex;
        justify-content: space-evenly;
        img { 
            height: 1.8rem;
            width: auto;
        }
    }

    @media screen and (min-width: ${breakpoints.mobile}) {
    display: ${props => pageWidthNavigation.includes(props.currentPathName) && 'flex'}
  }
`