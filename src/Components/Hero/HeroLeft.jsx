import React, { useEffect } from "react";
import data from "../../Utils/Constant/data";
import { HeroLeftWrapper } from "./style";
import AOS from "aos";

export default function HeroLeft() {
	const {
		hero: {
			left: { leftOne, leftSpan },
		},
	} = data;
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			once: false,
			duration: 500,
			offset: 200,
			mirror: true,
		});
	}, []);
	return (
		<HeroLeftWrapper data-aos="fade-down" data-aos-delay="200">
			<h2>
				{leftOne} <span>{leftSpan}</span>
			</h2>
		</HeroLeftWrapper>
	);
}
