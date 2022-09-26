import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import data from "../../Utils/Constant/data";
import { StylesNavbarRightWrapper } from "./style";

const NavbarRightWrapper = styled.div`
	${StylesNavbarRightWrapper}
`;
export default function NavbarRight({ open, setOpen }) {
	const { navbarMenu } = data;

	return (
		<NavbarRightWrapper open={open}>
			<ul>
				{navbarMenu.map((element) => (
					<li key={element.toLowerCase()}>
						<NavLink
							to={`/${element.toLowerCase()}`}
							style={({ isActive }) => ({
								color: isActive ? "#333" : "#ccc",
								transition: "all 0.3s linear",
								fontSize: "400",
							})}
							onClick={() => setOpen(!open)}
						>
							{element}
						</NavLink>
					</li>
				))}
			</ul>
		</NavbarRightWrapper>
	);
}
