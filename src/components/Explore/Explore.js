import React from "react";
import styled from "styled-components";
import Tags from "./Tags";

const Title = styled.h3`
	font-size: 1.25rem;
	color: #fff;
	font-weight: 600;
`;

const StyledExplore = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
	margin-bottom: 1.75rem;
`;

const Explore = () => {
	return (
		<StyledExplore>
			<Title>Explore</Title>
			<Tags />
		</StyledExplore>
	);
};

export default Explore;
