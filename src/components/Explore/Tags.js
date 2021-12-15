import React from "react";
import styled from "styled-components";

const TagsContainer = styled.div`
	display: flex;
	column-gap: 1rem;
	overflow-x: auto;
	padding-bottom: 1rem;
	@media (max-width: 767px) {
		margin-bottom: 0;
		&::-webkit-scrollbar {
			width: 0;
		}
	}
`;

const StyledTags = styled.div`
	height: 3rem;
	padding: 0.75rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	background-color: rgba(255, 255, 255, 0.05);
	border-radius: 1.25rem;
	border: 2px solid transparent;
	white-space: nowrap;
	&.active {
		background-color: rgba(255, 255, 255, 0.3);
		border: 2px solid #7b6fe5;
	}
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border: 2px solid #7b6fe5;
	}
`;

const Tags = () => {
	return (
		<TagsContainer>
			<StyledTags className="active">Live Auction</StyledTags>
			<StyledTags>Art</StyledTags>
			<StyledTags>Photography</StyledTags>
			<StyledTags>Games</StyledTags>
			<StyledTags>Music</StyledTags>
			<StyledTags>Utility</StyledTags>
		</TagsContainer>
	);
};

export default Tags;
