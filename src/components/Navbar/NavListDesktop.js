import React from "react";
import styled from "styled-components";
import Icons from "./Icons";

const StyledNavListDesktop = styled.ul`
	display: none;
	@media (min-width: 767px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 1rem 0;
		list-style: none;
	}
`;

const IconContainer = styled.li`
	display: none;
	@media (min-width: 767px) {
		display: flex;
		position: relative;
		width: 100%;
		padding: 1.5rem 2.688rem;
		margin: 0;
		transition: all 0.2s ease-in-out;
		&:first-child {
			background: rgba(255, 255, 255, 0.1);
		}
		&:first-child::after {
			content: "";
			position: absolute;
			left: 0;
			top: 0.5rem;
			height: 5.708rem;
			width: 6px;
			background: #ab52f3;
		}
		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}
	}
`;

const Logo = styled.div`
	display: none;
	@media (min-width: 767px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-bottom: 1.531rem;
		margin: 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
`;

const NavListDesktop = () => {
	return (
		<>
			<Logo>
				<Icons iconName={`logo.svg`} alt="logo" />
			</Logo>
			<StyledNavListDesktop>
				<IconContainer>
					<Icons iconName={`dashboard.svg`} alt="dashboard" />
				</IconContainer>
				<IconContainer>
					<Icons iconName={`transaction.svg`} alt="transaction" />
				</IconContainer>
				<IconContainer>
					<Icons iconName={`note.svg`} alt="note" />
				</IconContainer>
				<IconContainer>
					<Icons iconName={`settings.svg`} alt="settings" />
				</IconContainer>
				<IconContainer>
					<Icons iconName={`package.svg`} alt="package" />
				</IconContainer>
			</StyledNavListDesktop>
		</>
	);
};

export default NavListDesktop;
