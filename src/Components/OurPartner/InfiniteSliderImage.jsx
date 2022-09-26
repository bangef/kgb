import React from "react";
import styled, { keyframes } from "styled-components";
import { images } from "./AllImage";
import { nanoid } from "nanoid";

const scroll = keyframes`
	0%{left:0;}
	100%{left: -100%}
`;

const StyledInfiniteSliderImage = styled.div`
	display: flex;
	flex-items: center;
	height: 10rem;
	justify-content: center;
	div {
		width: 700%;
		height: 10rem;
		overflow: hidden;
		position: relative;
		z-index: 1;
		div#scroll {
			width: 700%;
			display: flex;
			align-items: center;
			height: 10rem;
			justify-content: space-around;
			left: 0px;
			animation: ${scroll} 15s linear infinite;
			gap: 5rem;

			div {
				display: flex;
				justify-content: center;
				align-items: start;
				width: 10rem;
				img {
					width: 500px;
					max-width: 200px;
					height: 100%;
					filter: grayscale(1);
				}
			}
		}
	}

	@media (min-width: 768px) {
		div {
			width: 300%;
			div#scroll {
				width: 300%;
				gap: 1rem;
			}
		}
	}
`;

const handleImage1 = (e) => {
	const wrapperScroll = document.querySelector("#scroll");
	wrapperScroll.style.animationPlayState = "paused";
	e.target.style.filter = "none";
};

const handleImage2 = (e) => {
	const wrapperScroll = document.querySelector("#scroll");
	wrapperScroll.style.animationPlayState = "running";
	e.target.style.filter = "grayscale(1)";
};

export default function InfiniteSliderImage({ open }) {
	return (
		<StyledInfiniteSliderImage open={open}>
			<div>
				<div id="scroll">
					{images.map((element, index) => {
						return (
							<div key={nanoid()}>
								<img
									data-aos="zoom-in"
									data-aos-delay={`${index + 1}00`}
									onMouseEnter={handleImage1}
									onMouseOut={handleImage2}
									src={element}
									alt={"img_op_" + index + ".png"}
								/>
							</div>
						);
					})}
					{images.map((element, index) => {
						return (
							<div key={nanoid()}>
								<img
									data-aos="zoom-in"
									data-aos-delay={`${index + 1}00`}
									onMouseEnter={handleImage1}
									onMouseOut={handleImage2}
									src={element}
									alt={"img_op_" + index + ".png"}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</StyledInfiniteSliderImage>
	);
}
