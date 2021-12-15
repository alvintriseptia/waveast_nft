import React from "react";
import styled from "styled-components";
import NavbarMobile from "./Mobile/NavbarMobile";
import NavListDesktop from "./NavListDesktop";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
	const NavbarContainer = styled.nav`
		@media (min-width: 767px) {
			position: fixed;
			left: 0;
			top: 0;
			width: 7.625rem;
			height: 100%;
			background: #262d3a;
			padding-top: 1.594rem;
			overflow: hidden;
		}
	`;

	return (
		<>
			<NavbarContainer>
				<NavbarMobile />
				<NavListDesktop />
			</NavbarContainer>
			<TopNavbar />
		</>
	);
};

export default Navbar;
