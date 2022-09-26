import styled from "styled-components";

export const StyledFooter = styled.footer`
	background-color: #f5f5f5;
	padding: 3rem 0;

	div {
		display: flex;
		flex-direction: column;
		.footer__left {
			margin-bottom: 1rem;
			div {
				display: flex;
				flex-direction: row;
				position: relative;

				.footer__logo {
					width: 2rem;
				}

				.footer__brand {
					position: absolute;
					top: 0.3rem;
					left: 2.5rem;
					font-weight: 700;
					font-size: 2rem;
					color: #333;
				}
				margin-bottom: 0.5rem;
			}

			.footer__description,
			.footer__addres {
				display: block;
				font-family: "Poppins", sans-serif;
				color: #787878;
				margin-bottom: 1rem;
			}

			.footer__list__socmed {
				list-style-type: none;
				display: flex;

				.footer__item__socmed {
					border-radius: 50%;
					width: 2rem;
					height: 2rem;
					display: flex;
					justify-content: center;
					align-items: center;

					&:not(:last-child) {
						margin-right: 1rem;
					}
				}
			}
		}
		.footer__right {
			.footer__list__menu {
				list-style-type: none;
				font-weight: 700;
				color: #333;
				span {
					display: inline-block;
					margin-bottom: 1rem;
				}
				.footer__item__menu {
					font-weight: 400;

					&:not(:last-child) {
						margin-bottom: 0.5rem;
					}

					a {
						color: #787878;
						text-decoration: none;

						&:hover {
							color: #333;
							transition: all 0.3s ease;
						}

						&:active {
							color: #787878;
							font-size: 0.9rem;
						}
					}
				}
			}
		}
	}

	@media (min-width: 768px) {
		& > div {
			flex-direction: row;
		}

		.footer__left,
		.footer__right {
			width: 50%;
		}

		.footer__left {
			padding-right: 1rem;
		}

		.footer__right {
			display: flex;
			align-items: center;
		}
	}
`;
