import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	height: 336px;
	width: 291px;
	padding: 0.75rem;
	border-radius: 0.75rem;
	background-color: #262d3a;
`;

const ImageCard = styled.div.attrs((props) => ({
	url: props.url,
}))`
	position: relative;
	height: 160px;
	width: 267px;
	border-radius: 0.75rem;
	background-image: url("${(props) => props.url}");
`;

const AuctionEnd = styled.div`
	position: absolute;
	bottom: 0;
	height: 29px;
	width: 267px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #262d3acc;
	border-radius: 0 0 0.75rem 0.75rem;
	padding: 4px, 12px;
	font-size: 14px;
	color: #fff;
`;

const ItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.75rem;
`;

const Tag = styled.div`
	height: 2rem;
	border-radius: 0.75rem;
	padding: 4px 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(196, 196, 196, 0.2);
	color: #fff;
`;

const Save = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: rgba(196, 196, 196, 0.2);
	background-image: url("/icons/save.svg");
	background-repeat: no-repeat;
	background-position: center;
	transition: all 0.2s ease-in-out;
	&:hover {
		cursor: pointer;
		background-image: url("/icons/saveHover.svg");
	}
`;

const BidContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	span {
		color: #6763fd;
	}
`;

const Product = styled.h4`
	font-size: 1.125rem;
	font-weight: 500;
`;

const Line = styled.div`
	height: 1px;
	width: 100%;
	background-color: rgba(255, 255, 255, 0.1);
`;

const BidderContainer = styled.div`
	display: flex;
`;

const Bidder = styled.div`
	height: 36px;
	width: 36px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #6763fd;
	color: #fff;
	font-size: 0.75rem;
	margin-right: -0.75rem;
	&:first-child {
		margin-left: 0;
	}
	&:nth-child(3) {
		z-index: 2;
	}
`;

const Card = ({ data }) => {
	const endsBidHours = parseInt(data["bid_ends"].substr(11, 2));
	const endsBidMinutes = parseInt(data["bid_ends"].substr(14, 2));
	const endsBidSeconds = parseInt(data["bid_ends"].substr(17, 2));

	const [hours, setHours] = useState(endsBidHours);
	const [minutes, setMinutes] = useState(endsBidMinutes);
	const [seconds, setSeconds] = useState(endsBidSeconds);

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					if (hours === 0) {
						clearInterval(myInterval);
					} else {
						setHours(hours - 1);
						setMinutes(59);
					}
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<StyledCard>
			<ImageCard url={data.artworksUrl}>
				<ItemContainer>
					<Tag>Art</Tag>
					<Save />
				</ItemContainer>
				<AuctionEnd>
					Ends in : {hours}h : {minutes}m : {seconds}s
				</AuctionEnd>
			</ImageCard>
			<BidContainer>
				<p>Current Bid : </p>
				<span>{data.currentBid} ETH</span>
			</BidContainer>
			<Product>{data.name}</Product>
			<Line />
			<BidderContainer>
				<Bidder>
					<img src="/images/bidder1.png" alt="username1" />
				</Bidder>
				<Bidder>
					<img src="/images/bidder2.png" alt="username2" />
				</Bidder>
				<Bidder>
					<img src="/images/bidder3.png" alt="username3" />
				</Bidder>
				<Bidder>
					<img src="/images/bidder4.png" alt="username4" />
				</Bidder>
				<Bidder>
					<img src="/images/bidder5.png" alt="username5" />
				</Bidder>
				<Bidder>100+</Bidder>
			</BidderContainer>
		</StyledCard>
	);
};

export default Card;
