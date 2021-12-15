import React from "react";
import styled from "styled-components";

const ListIcons = styled.div`
	display: flex;
	column-gap: 8px;
`;

const IconContainer = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #262d3a;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IconFeatures = () => {
	return (
		<ListIcons>
			<IconContainer>
				<img src="/icons/chat.svg" alt="chat" />
			</IconContainer>
			<IconContainer>
				<img src="/icons/notification.svg" alt="notification" />
			</IconContainer>
		</ListIcons>
	);
};

export default IconFeatures;
