import React from "react";
import styled from "styled-components";
import InfiniteSliderImage from "./InfiniteSliderImage";

export default function OurPartner({ open }) {
	return (
		<StyledOurPartner>
			{/* <h2 data-aos="fade-down">Our Partner</h2> */}
			<InfiniteSliderImage open={open} />
		</StyledOurPartner>
	);
}

const StyledOurPartner = styled.section`
	background-color: #f5f5f5;
	padding: 3rem 0;
	text-align: center;
	h2 {
		font-size: 2rem;
		color: #787878;
		margin-bottom: 2rem;
	}
	div {
		width: 100%;
	}
	@media (min-width: 768px) {
	}
`;
