import React from "react";
import styled from "styled-components";
import IconFeatures from "../IconFeatures";
import SearchButton from "../SearchButton";
import Hamburger from "./Hamburger";

const StyledNavbarMobile = styled.div`
	display: none;
	@media (max-width: 767px) {
		position: fixed;
		z-index: 5;
		background: #1b1e2a;
		top: 0;
		height: 4.5rem;
		width: 100%;
		padding: 0 1rem;
		padding-top: 0.5rem;
		display: flex;
		margin-bottom: 1rem;
		align-items: center;
		column-gap: 1.25rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
`;
const NavbarMobile = () => {
	return (
		<>
			<Hamburger />
			<StyledNavbarMobile>
				<SearchButton />
				<IconFeatures />
				<img src="/images/avatar_main.png" alt="profile" />
			</StyledNavbarMobile>
		</>
	);
};

export default NavbarMobile;
