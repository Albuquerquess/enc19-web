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
	width: 0;
	width: ${props => props.active && '65vw'};
	transition: width .5s;

	height: 100%;
	background-color: var(--color-secondary);
	text-align: right;
	padding-top: 3rem;

	

	img#sidebar-close {
		margin-right: 2rem;
		width: 3.2rem;
	}
	
	div#sidebar-page-icons-wrapper {
		ul {
			margin-left: 1rem;
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
				margin-right: 1rem;
			}

			span {
				font-size: 3rem;
			}
		}
		ul > li.sidebar-page-icon {
			margin-bottom: 2rem;
		}
		ul > li.sidebar-page-icon > a > img {
			width: 3.2rem;
		}
}

`
