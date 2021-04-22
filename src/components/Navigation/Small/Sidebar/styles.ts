import styled from 'styled-components';
import zIndex from '../../../../assets/styles/z-index'

interface sidebarProps {
	active: boolean;
}

export const SidebarContainer = styled.div<sidebarProps>`
	width: 100vw;
	height: 100vh;
  
	display: ${props => props.active ? 'flex' : 'none'};
	justify-content: flex-end;
	
	position: fixed;
  	top: 0;
	overflow-y: hidden;

	z-index: ${zIndex.topAll};
	
`;

export const SidebarWrapper  = styled.div<sidebarProps>`
	transition: width .5s;
	width: 0;
	width: ${props => props.active && '65vw'};

	height: 100%;
	background-color: var(--color-secondary);
	text-align: right;

	img#sidebar-close {
		margin: 1rem 1rem 1rem 0;
	}
	
	div#sidebar-page-icons-wrapper {
		ul {
			margin-left: .5rem;
		}

		ul li {
			display: flex;
			align-items: center;
			font-weight: 700;

		}
		ul li a {
			display: flex;
			align-items: center;
			

			img {
				margin-right: .5rem;
			}

			span {
				font-size: 1.4rem;
			}
		}
		ul > li.sidebar-page-icon {
			margin-bottom: 1rem;
		}
		ul > li.sidebar-page-icon > a > img {
			width: 3rem;
		}
}

`
