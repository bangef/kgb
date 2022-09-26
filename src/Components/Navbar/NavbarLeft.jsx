import React from "react";
import logo from "../../Images/logo.png";
import BtnBurger from "./BtnBurger";
import { NavbarLeftWrapper } from "./style";

export default function NavbarLeft({ open, setOpen }) {
	return (
		<NavbarLeftWrapper>
			<div>
				<img src={logo} alt="logo" />
				<span>KGB</span>
			</div>
			<BtnBurger open={open} setOpen={setOpen} />
		</NavbarLeftWrapper>
	);
}
