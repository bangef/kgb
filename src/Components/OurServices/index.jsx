import React from "react";
import styled from "styled-components";
import data from "../../Utils/Constant/data";
import Container from "../Container";
import CardOurservices from "./CardOurservices";

const StyledOurServices = styled.section`
	padding: 3rem 0;
	background-color: white;
	div {
		.ourservice__top {
			margin-bottom: 1rem;
			.ourservice__title {
				text-align: end;
				font-size: 1.2rem;
				color: #333;
				margin-bottom: 2rem;
				font-family: "Poppins", arial;
				&:after {
					margin-left: 0.2rem;
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
			}
		}
	}

	@media (min-width: 768px) {
		div {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			.ourservice__bottom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
`;
export default function OurServices() {
	const { service } = data;
	return (
		<StyledOurServices>
			<Container>
				<div className="ourservice__top">
					<h2 className="ourservice__title" data-aos="fade-left">
						Our Services
					</h2>
				</div>
				<div className="ourservice__bottom">
					{service.map((e, i) => (
						<CardOurservices
							key={`${e.title}_${i}`}
							title={e.title}
							description={e.description}
							delay={`${i * 2 + 1}00`}
						>
							<e.icon className="icon" />
						</CardOurservices>
					))}
				</div>
			</Container>
		</StyledOurServices>
	);
}
