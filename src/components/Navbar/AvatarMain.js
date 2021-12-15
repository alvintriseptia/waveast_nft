import React from "react";
import styled from "styled-components";

const StyledAvatarMain = styled.div`
	display: flex;
	column-gap: 12px;
	align-items: center;
	color: #fff;
	@media (max-width: 767px) {
		display: none;
	}
	& .icon {
		cursor: pointer;
	}
`;

const AvatarMain = () => {
	return (
		<StyledAvatarMain>
			<img src="/images/avatar_main.png" alt="profile" />
			<span>Marvin McKinney</span>
			<img className="icon" src="/icons/down-arrow.svg" alt="down-arrow" />
		</StyledAvatarMain>
	);
};

export default AvatarMain;
