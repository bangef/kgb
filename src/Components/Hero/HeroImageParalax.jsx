import React from "react";
import HeroImage from "../../Images/hero_1.jpg";
import { HeroImageParalaxWrapper } from "./style";

export default function HeroImageParalax() {
	return (
		<HeroImageParalaxWrapper
			src={HeroImage}
			alt="hero_image"
			data-aos="fade-down"
			data-aos-once="true"
		/>
	);
}
