import { useState } from "react";
import styled from "styled-components";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HeroImageParalax from "../Components/Hero/HeroImageParalax";
import Navbar from "../Components/Navbar";
import OurPartner from "../Components/OurPartner";
import AboutUs from "../Components/AboutUs";
import OurServices from "../Components/OurServices";

export default function Home() {
	const [height, setHeight] = useState(0);

	return (
		<>
			<Navbar height={height} setHeight={setHeight} />
			<StyledShadNavbar height={height} />
			<Hero />
			<HeroImageParalax />
			<AboutUs />
			<OurServices />
			<OurPartner />
			<ContactUs />
			<Footer />
		</>
	);
}

const StyledShadNavbar = styled.div`
	height: calc(${({ height }) => height}px - 2rem);
	width: 100%;
	@media (min-width: 768px) {
		height: ${({ height }) => height}px;
	}
`;
