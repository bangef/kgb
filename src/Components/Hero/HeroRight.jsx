import React from "react";
import data from "../../Utils/Constant/data";
import { HeroRightWrapper } from "./style";

export default function HeroRight() {
	const {
		hero: { right },
	} = data;

	return (
		<HeroRightWrapper data-aos="fade-down" data-aos-delay="100">
			<p>{right}</p>
		</HeroRightWrapper>
	);
}
