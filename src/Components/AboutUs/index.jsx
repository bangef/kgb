import React from "react";
import styled from "styled-components";
import data from "../../Utils/Constant/data";
import Card from "../Card";
import Container from "../Container";

const StyledAboutUs = styled.section`
	background-color: #f5f5f5;
	padding: 3rem 0;
	div {
		.aboutus__title {
			font-family: "Poppins", arial;
			display: block;
			font-size: 1.2rem;
			color: #333;
			margin-bottom: 2rem;
			&:before {
				font-family: "Poppins", arial;
				margin-right: 0.2rem;
				content: "";
				margin-bottom: 0.2rem;
				background-color: #333;
				display: inline-block;
				width: 0.1rem;
				height: 0.1rem;
				border-radius: 50%;
				color: white;
				padding: 0.2rem;
			}
			width: 100%;
		}
		.aboutus__description {
			text-align: justify;
			display: block;
			width: 100%;
			color: #787878;
			font-family: "Poppins", arial;
			font-size: 1rem;
			font-weight: 400;
			margin-bottom: 1rem;
		}
	}
	@media (min-width: 768px) {
		div {
			display: column;
			flex-wrap: wrap;
			.aboutus__wrapper {
				display: flex;
				margin-bottom: 1rem;
				.aboutus__title {
					display: block;
					font-size: 1.2rem;
					color: #333;
					margin-bottom: 2rem;
					font-family: "Poppins", arial;
					&:before {
						margin-right: 0.2rem;
						content: "";
						margin-bottom: 0.2rem;
						background-color: #333;
						display: inline-block;
						width: 0.1rem;
						height: 0.1rem;
						border-radius: 50%;
						color: white;
						padding: 0.2rem;
					}
					width: 20%;
				}
				.aboutus__description {
					text-align: start;
					display: block;
					width: 80%;
					color: #787878;
					font-family: "Poppins", arial;
					font-size: 2rem;
					font-weight: 500;
					line-height: 3rem;
				}
			}
			.aboutus__wrapper__card {
				display: flex;
				justify-content: space-between;
			}
		}
	}
`;

export default function Aboutus() {
	const { about } = data;
	return (
		<StyledAboutUs>
			<Container>
				<div className="aboutus__wrapper">
					<h2
						className="aboutus__title"
						data-aos="fade-right"
						data-aos-delay="200"
					>
						About Us
					</h2>
					<p
						className="aboutus__description"
						data-aos="fade-left"
						data-aos-delay="400"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						animi beatae sit placeat accusantium soluta iusto explicabo fugiat,
						quasi vitae?
					</p>
				</div>
				<div className="aboutus__wrapper__card">
					{about.map((e, i) => (
						<Card
							key={`${e}_${i}`}
							delay={`${i * 2 + 1}00`}
							title={e.title}
							description={e.description}
						/>
					))}
				</div>
			</Container>
		</StyledAboutUs>
	);
}
