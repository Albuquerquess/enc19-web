import styled from 'styled-components';
import breakpoints from '../../../assets/styles/breakpoints';

import pageWidthNavigation from '../../../utils/pageWIthNavigation'

interface NavigationContainerProps {
  currentPathName: string
}

export const NavigationContainer = styled.div<NavigationContainerProps>`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  margin-top: .5rem;

  img {
      width: 2rem;
  }
  span#page-title {
      font-weight: 700;
      font-size: 2rem
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    display: ${props => pageWidthNavigation.includes(props.currentPathName) && 'flex'}
  }
`;
