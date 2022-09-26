import React from "react";
import styled from "styled-components";

const StyledCardOurservice = styled.div`
				width: 100%;
				margin-bottom: 2rem;
                padding: 0 2rem;
				&:last-child{
				    margin-bottom: 0;
				}
				.ourservice__card__icon {
					width: 100px;
					height: 100px;
					background-color: #f5f5f5;
					border-radius: 1rem;
					margin-bottom: 1rem;
					display: flex;
					justify-content: center;
					align-items: center;
					.icon{
						color: #333;
						font-size: 4rem;
					}

                    &:hover {
                        transition: all 1s ease-out;
                        background-color: #333;
                        cursor: pointer;
                        .icon{
						    color: #f5f5f5;
                        }
                    }
				}

				.ourservice__card__title{
					color: #333;
					font-family: 'Poppins', arial;
					font-size: 1.5rem
					font-weight: 700;
				}

				.ourservice__card__description{
					color: #787878;
					font-family: 'Poppins', arial;
					font-size: 1rem
					font-weight: 400;
				}
                @media(min-width: 768px){
                    width: 30%;
					height: 100%;
                    margin-bottom: 1rem;
                    padding: 0;

                    &:nth-child(n){
                        margin-bottom: 0;
                    }
                }
`;

export default function CardOurservices({
	children,
	title,
	description,
	delay,
}) {
	return (
		<StyledCardOurservice data-aos="fade-down" data-aos-delay={delay}>
			<div className="ourservice__card__icon">{children}</div>
			<h2 className="ourservice__card__title">{title}</h2>
			<p className="ourservice__card__description">{description}</p>
		</StyledCardOurservice>
	);
}
