import React from "react";
import styled from "styled-components";
import Container from "../Container";
import ContactusImage from "../../Images/contactus_1.png";

const StyledContactUs = styled.div`
	padding: 3rem;
	background-color: #2a307c;
	border-radius: 1rem;
	margin: 2rem 0;
	.contactus__left {
		width: 100%;
		.contactus__title {
			font-size: 2rem;
			font-weight: 700;
			color: white;
			line-height: 3rem;
		}
		.contactus__description {
			font-weight: 400;
			color: whitesmoke;
			font-family: "Poppins", sans-serif;
			margin-bottom: 3rem;
		}

		.contactus__button {
			padding: 1rem 2rem;
			border-radius: 1rem;
			border: none;
			font-family: "Poppins", arial;
			font-weight: 700;
			color: #333;
			background-color: #f5f5f5;
			text-decoration: none;

			&:hover {
				background: rgba(170, 170, 170, 1);
			}
			&:focus {
				outline: none;
				box-shadow: 0 0 0 3px rgba(170, 170, 170, 0.5);
			}
			&:active {
				box-shadow: medium invert color;
			}
		}
	}
	.contactus__right {
		display: none;
	}

	@media (min-width: 1024px) {
		margin: 2rem 4rem;
		display: flex;
		position: relative;
		.contactus__right,
		.contactus__left {
			display: block;
			width: 50%;
		}
		.contactus__left {
			padding-right: 1rem;
		}

		.contactus__right {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.contactus__image {
				max-width: 350px;
				width: 100%;
				z-index: 4;
			}
			.contactus__ball1 {
				width: 300px;
				height: 300px;
				display: block;
				position: absolute;
				right: 0;
				top: 0;
				background-color: #00cc60;
				border-radius: 250px;
				z-index: 3;
			}
			.contactus__ball2 {
				width: 300px;
				height: 300px;
				display: block;
				position: absolute;
				left: 0;
				bottom: 0;
				background-color: #ffe477;
				border-radius: 250px;
				z-index: 3;
			}
		}
	}
`;
export default function ContactUs() {
	return (
		<section data-aos="fade-right">
			<Container>
				<StyledContactUs>
					<div className="contactus__left">
						<h2 className="contactus__title">
							Have a question?
							<br />
							Our team is happy to assist you
							<br />
						</h2>
						<p className="contactus__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
							consequuntur libero minus temporibus esse laboriosam ea in
							expedita eum beatae?
						</p>
						<a className="contactus__button" href="mailto:bangef@gmail.com">
							Contact Us
						</a>
					</div>
					<div className="contactus__right">
						<img
							className="contactus__image"
							src={ContactusImage}
							alt="Customer Service Photo"
						/>
						<span className="contactus__ball1"></span>
						<span className="contactus__ball2"></span>
					</div>
				</StyledContactUs>
			</Container>
		</section>
	);
}
