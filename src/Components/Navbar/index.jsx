import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { StylesNavbarWrapper } from "./style";
import NavbarRight from "./NavbarRight";
import NavbarLeft from "./NavbarLeft";
import Container from "../Container";
import data from "../../Utils/Constant/data";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
	${StylesNavbarWrapper}
`;
export default function Navbar({ height, setHeight }) {
	const { id } = useParams();
	const [open, setOpen] = useState(false);
	const [navPadding, setNavPadding] = useState("1rem");
	const [navTop, setNavTop] = useState("0");
	const ref = useRef(null);
	var prevYOffset = window.pageYOffset;
	const uiHideAndShowNavbar = () => {
		var currYOffset = window.pageYOffset;
		if (prevYOffset > currYOffset) {
			setNavTop("0");
		} else {
			setNavTop("-100px");
		}
		prevYOffset = currYOffset;
	};

	const listenerScrollEvent = () => {
		window.scrollY > 5 ? setNavPadding(".3rem") : setNavPadding("1rem");
		let curY = window.scrollY;
		window.scrollY < curY ? setNavTop("-100px") : setNavTop("0");
	};
	useEffect(() => {
		setTitleDom(id);
		setHeight(ref.current.offsetHeight);
		window.addEventListener("scroll", listenerScrollEvent);
		if (!open) {
			window.addEventListener("scroll", uiHideAndShowNavbar);
		}

		return () => {
			window.removeEventListener("scroll", listenerScrollEvent);
		};
	}, [id, height, open]);

	return (
		<NavbarWrapper ref={ref} navPadding={navPadding} navTop={navTop}>
			<Container>
				<NavbarLeft open={open} setOpen={setOpen} />
				<NavbarRight open={open} setOpen={setOpen} />
			</Container>
		</NavbarWrapper>
	);
}

const setTitleDom = (args) => {
	document.title = data.title + " - " + args;
};
