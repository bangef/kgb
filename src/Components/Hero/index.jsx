import React from "react";
import Container from "../Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { HeroWrapper } from "./style";

export default function Hero() {
	return (
		<HeroWrapper>
			<Container>
				<HeroLeft />
				<HeroRight />
			</Container>
		</HeroWrapper>
	);
}
