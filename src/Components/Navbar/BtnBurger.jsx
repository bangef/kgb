import styled from "styled-components";
import { StylesBtnBurgerWrapper } from "./style";

const BtnBurgerWrapper = styled.div`
	${StylesBtnBurgerWrapper}
`;

export default function BtnBurger({ open, setOpen }) {
	return (
		<BtnBurgerWrapper onClick={() => setOpen(!open)} open={open}>
			<span />
			<span />
			<span />
		</BtnBurgerWrapper>
	);
}
