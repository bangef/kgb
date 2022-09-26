import Container from "../Container";
import Logo from "../../Images/logo.png";
import data from "../../Utils/Constant/data";
import { FaFacebookF } from "react-icons/fa";
import { StyledFooter } from "./style";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledFooterItems = styled.li`
	background-color: ${({ bg }) => bg};
`;

export default function Footer() {
	const {
		navbarMenu,
		footer: { address, desc, socmed },
	} = data;

	return (
		<StyledFooter>
			<Container>
				<div className="footer__left">
					<div>
						<img className="footer__logo" src={Logo} alt="Logo" />
						<span className="footer__brand">KGB</span>
					</div>
					<span className="footer__description">{desc}</span>
					<span className="footer__addres">{address}</span>
					<ul className="footer__list__socmed">
						{socmed.map((element, index) => {
							return (
								<StyledFooterItems
									key={`list-${index}`}
									bg={element.colorbg}
									className="footer__item__socmed"
								>
									<a href={element.link}>
										<FaFacebookF />
									</a>
								</StyledFooterItems>
							);
						})}
					</ul>
				</div>
				<div className="footer__right">
					<ul className="footer__list__menu">
						<span>Menu</span>
						{navbarMenu.map((element) => (
							<li key={element.toLowerCase()} className="footer__item__menu">
								<NavLink to={`/${element.toLowerCase()}`}>{element}</NavLink>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</StyledFooter>
	);
}
