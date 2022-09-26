import styled, { css } from "styled-components";

// INDEX COMP STYLE
export const StylesNavbarWrapper = css`
	/* SMALL DEVICES */
	background-color: white;
	position: fixed;
	z-index: 999;
	top: ${({ navTop }) => navTop && navTop};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	transition: all 0.3s ease;
	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		padding: ${({ navPadding }) => navPadding && navPadding} 0;
		background-color: ${({ navBackgroundColor }) =>
			navBackgroundColor && navBackgroundColor};
	}
`;

// NAVBAR-LEFT COMP STYLE
export const NavbarLeftWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	div {
		img {
			width: 2rem;
			margin-right: 0.2rem;
		}

		span {
			font-size: 2rem;
			font-weight: 700;
			padding-top: 0.4rem;
			display: inline-block;
			color: #333;
		}
	}

	@media (min-width: 768px) {
		display: block;
		width: fit-content;
		margin-right: 3rem;
		margin-bottom: 0;
	}
`;

// NAVBAR-RIGHT COMP STYLE
export const StylesNavbarRightWrapper = css`
	z-index: 999;
	background-color: white;
	position: absolute;
	left: 0;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-110%)")};
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	transition: all 0.5s linear;
	padding-left: 1rem;
	ul {
		list-style-type: none;
		li {
			font-size: 2.5rem;
			font-weight: 700;
			margin-bottom: 2rem;
			a {
				text-decoration: none;
				color: #787878;

				&:hover {
					color: black;
					transition: all 0.3s linear;
					font-size: 400;
				}

				&:active {
					color: #787878;
				}
			}
			&:last-child() {
				margin-bottom: 0;
			}
		}
	}

	@media (min-width: 768px) {
		display: flex;
		transform: none;
		height: auto;
		transition: all 0s ease 0s;
		width: auto;
		position: static;
		ul {
			display: flex;
			li {
				font-size: 1rem;
				margin-bottom: 0;

				&:nth-child(2) {
					margin: 0 1rem;
				}
				a {
					border-bottom: none;
					display: inline-block;
					transition: all 0s ease 0s;
				}
			}
		}
	}
`;

// BUTTON-BURGOR COMP STYLE
export const StylesBtnBurgerWrapper = css`
	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		display: inline-block;
		height: 0.2rem;
		border-radius: 1rem;
		width: 35px;
		background-color: ${({ open }) => (open ? "#ccc" : "#333")};
		cursor: pointer;
		transform-origin: 0.1px;
		transition: all 0.3s ease;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			margin: 6px 0;
			transform: ${({ open }) => (open ? "transformX(0)" : "transformX(100%)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}

	@media (min-width: 768px) {
		display: none;
	}
`;
