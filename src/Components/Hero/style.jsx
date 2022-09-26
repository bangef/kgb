import styled from "styled-components";

// INDEX COMP STYLE
export const HeroWrapper = styled.section`
	padding: 3rem 0;
`;

// HERO-RIGHT COMP STYLE
export const HeroRightWrapper = styled.div`
	display: flex;
	align-items: end;
	p {
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-weight: 400;
		color: #787878;
	}

	@media (min-width: 768px) {
		p {
			font-size: 21.33px;
		}
	}
`;

// HERO-LEFT COMP STYLE
export const HeroLeftWrapper = styled.div`
	margin-bottom: 1rem;
	h2 {
		font-family: "Poppins", sans-serif;
		font-size: 2rem;
		font-weight: 700;
		color: #333;

		span {
			font-family: "Poppins", sans-serif;
			color: #787878;
		}
	}

	@media (min-width: 768px) {
		h2 {
			line-height: 4rem;
			font-size: 70.52px;
			span {
				line-height: 4rem;
			}
		}
	}
`;

// HERO-IMAGE-PARALAX COMP STYLE
export const HeroImageParalaxWrapper = styled.img`
	width: 100%;
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;
