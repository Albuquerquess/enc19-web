import styled from 'styled-components';
import breakpoints from '../../../assets/styles/breakpoints';
import pageWidthNavigation from '../../../utils/content/pageWIthNavigation';

interface StyleNavigationContainerProps {
    currentPathName: string
  }

export const NavigationContainer = styled.div<StyleNavigationContainerProps>`
    width: 100%;
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 3rem;
    
    

    span#navigation-title {
        font-weight: 700;
        font-size: 4.5rem;
    }
    nav#navigation-icon-group {
        width: 60%;
        max-width: 400px;

        display: flex;
        justify-content: space-evenly;
        img { 
            height: 4.5rem;
            width: auto;
        }
    }

    @media screen and (min-width: ${breakpoints.mobile}) {
    display: ${props => pageWidthNavigation.includes(props.currentPathName) && 'flex'}
  }
`