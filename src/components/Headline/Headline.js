import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.div`
	padding: 1.75rem 0;
	padding-right: 1.5rem;
	display: flex;
	column-gap: 1.5rem;
	@media (max-width: 767px) {
		padding-right: 0;
		margin-top: 4.5rem;
	}
`;

const StyledHero = styled.div`
	position: relative;
	width: 100%;
	height: 20rem;
	border-radius: 1.25rem;
	overflow: hidden;
	background: linear-gradient(103.85deg, #6763fd 5.47%, #b84ef1 96.28%);
	@media (max-width: 1024px) {
		height: 9rem;
	}
`;

const Elipse1 = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	user-select: none;
	pointer-events: none;
	@media (max-width: 767px) {
		width: 25%;
	}
`;

const Elipse2 = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	user-select: none;
	pointer-events: none;
	@media (max-width: 1024px) {
		width: 25%;
	}
`;

const Background = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	user-select: none;
	pointer-events: none;
	@media (max-width: 1024px) {
		width: 25%;
	}
`;

const ContentContainer = styled.div`
	padding: 3rem 2rem;
	color: #fff;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	h1 {
		font-size: 2.5rem;
	}
	p {
		font-size: 1.15rem;
		line-height: 2rem;
	}
	@media (max-width: 1024px) {
		padding: 1rem;
		row-gap: 0.5rem;
		h1 {
			font-size: 1rem;
			margin: 0;
		}
		p {
			font-size: 0.75rem;
			line-height: 1rem;
			margin: 0;
		}
	}
`;

const ButtonContainer = styled.div`
	margin-top: 0.5rem;
	display: flex;
	z-index: 2;
	column-gap: 1.25rem;
`;

const Button = styled.button`
	background: #fff;
	width: 10rem;
	height: 3rem;
	border-radius: 0.5rem;
	cursor: pointer;
	border: none;
	transition: all 0.2s ease;
	span {
		font-size: 1rem;
		font-weight: 600;
		background: -webkit-linear-gradient(#6763fd, #b84ef1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	&:hover {
		background: rgba(255, 255, 255, 0.7);
	}
	@media (max-width: 1024px) {
		width: 8rem;
		height: 2rem;
		span {
			font-size: 0.75rem;
		}
`;

const Headline = () => {
	return (
		<StyledHeadline>
			<StyledHero>
				<Elipse1 src="/images/elipse.png" />
				<Elipse2 src="/images/elipse2.png" />
				<Background src="/images/bg-hero.png" />
				<ContentContainer>
					<h1>One Stop NFT Marketplace</h1>
					<div>
						<p>Discover limited-edition digital artwork</p>
						<p>Create,Sell, and Collect yours now!</p>
					</div>
					<ButtonContainer>
						<Button>
							<span>Start Create</span>
						</Button>
						<Button>
							<span>How It Work</span>
						</Button>
					</ButtonContainer>
				</ContentContainer>
			</StyledHero>
		</StyledHeadline>
	);
};

export default Headline;
