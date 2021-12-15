import React from "react";
import styled from "styled-components";
import AvatarMain from "./AvatarMain";
import IconFeatures from "./IconFeatures";
import SearchButton from "./SearchButton";

const Flex = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1.25rem;
	@media (min-width: 1500px) {
		column-gap: 2rem;
	}
`;

const StyledTopNavbar = styled.div`
	@media (max-width: 767px) {
		display: none;
	}
	display: flex;
	align-items: center;
	@media (min-width: 1500px) {
		justify-content: space-between;
	}
	margin-left: 5rem;
	margin-right: 3rem;
	margin-top: 1.25rem;
	margin-bottom: 0.75rem;
	column-gap: 1.25rem;
`;

const BalanceContainer = styled.div`
	display: flex;
	align-items: center;
	width: 250px;
	height: 3.5rem;
	background: #262d3a;
	padding: 1rem 0.75rem;
	border-radius: 0.75rem;
	color: #fff;
	column-gap: 10px;
	overflow: hidden;
`;

const TopNavbar = () => {
	return (
		<StyledTopNavbar>
			<SearchButton />
			<Flex>
				<BalanceContainer>
					<img src="/icons/ethereum.svg" alt="Ethereum" />
					<span>543,694,489 ETH</span>
				</BalanceContainer>
				<IconFeatures />
				<AvatarMain />
			</Flex>
		</StyledTopNavbar>
	);
};

export default TopNavbar;
