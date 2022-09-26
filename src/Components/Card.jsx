import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	width: 100%;
	border-radius: 1rem;
	background-color: #f5f5f5;
	text-align: start;
	margin-bottom: 1rem;
	.card__title {
		font-size: 3rem;
		color: #333;
		font-family: "Poppins", arial;
	}
	.card__description {
		color: #787878;
		font-weight: 400;
		font-family: "Poppins", arial;
	}
	@media (min-width: 768px) {
		width: 30%;
	}
`;

export default function Card({ children, title, description, delay }) {
	return (
		<StyledCard data-aos="fade-down" data-aos-delay={delay}>
			{children}
			<h2 className="card__title">{title}</h2>
			<p className="card__description">{description}</p>
		</StyledCard>
	);
}
