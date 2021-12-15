import styled from "styled-components";

import React from "react";
const StyledSearchButton = styled.div`
	position relative;
	width: 80%;
	height: 2.5rem;
	margin-left: 4rem;
	border-radius: 0.5rem;
	background: #262d3a;
	@media (min-width: 767px) {
		height:3.5rem;
	}
	@media (min-width: 1024px) {
		width:auto;
		width:49%;
	}
	@media (min-width: 1500px) {
		min-width:60%;
	}
    input{
	    width: 100%;
	    height: 100%;
	    border: none;
	    background: transparent;
	    color: #fff;
	    padding: 0.5rem 0.75rem;
	    padding-left: 2.5rem;
		&::placeholder{
			color: rgba(255,255,255,0.5);
		}
    }
    img{
		position: absolute;
		top: 22%;
		left: 0.75rem;
		@media (min-width: 767px) {
			top: 25%;
		}
	}
`;
const SearchButton = () => {
	return (
		<StyledSearchButton>
			<img src="/icons/search.svg" alt="search" />
			<input type="text" placeholder="Search" />
		</StyledSearchButton>
	);
};

export default SearchButton;
