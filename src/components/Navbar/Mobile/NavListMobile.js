import React from "react";
import styled from "styled-components";
import Icons from "../Icons";

const StyledNavListMobile = styled.ul`
	display: none;
	@media (max-width: 767px) {
		display: flex;
		${(opened) => (opened ? "z-index:98;" : "z-index:0;")};
		flex-direction: column;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		transform: translateX(100%);
		background: #1b1e2a;
		transition: all 0.3s linear;
		${(opened) => opened && "transform:translateX(0); padding-top:5rem;"};
	}
`;

const IconContainer = styled.li`
	display: none;
	@media (max-width: 767px) {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		padding: 1.5rem 2.688rem;
		margin: 0;
	}
`;

const Logo = styled.div`
	display: none;
	@media (max-width: 767px) {
		position: absolute;
		z-index: 99;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 0.781rem;
	}
`;

const LogoName = styled.h4`
	@media (max-width: 767px) {
		font-size: 1.5rem;
		font-weight: 700;
		background: -webkit-linear-gradient(#6763fd, #b84ef1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;
const EthereumSaldo = styled.div`
	display: none;
	@media (max-width: 767px) {
		display: flex;
		align-items: center;
		column-gap: 0.625rem;
		background: #262d3a;
		padding: 1rem 0.75rem;
		margin: 2rem 1rem;
		border-radius: 0.75rem;
		height: 3.5rem;
		p {
			font-size: 0.875rem;
			color: #fff;
		}
	}
`;
const NavListMobile = ({ opened }) => {
	return (
		<>
			{opened && (
				<>
					<StyledNavListMobile>
						<Logo>
							<Icons iconName={`logo.svg`} alt={null} />
							<LogoName>CuanMakers</LogoName>
						</Logo>
						<EthereumSaldo>
							<Icons iconName={`ethereum.svg`} alt={null} />
							<p>543,694,489 ETH</p>
						</EthereumSaldo>
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
							<Icons iconName={`package.svg`} alt="package" />
						</IconContainer>
						<IconContainer>
							<Icons iconName={`settings.svg`} alt="settings" />
						</IconContainer>
					</StyledNavListMobile>
				</>
			)}
		</>
	);
};

export default NavListMobile;
