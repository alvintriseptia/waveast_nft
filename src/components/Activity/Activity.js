import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledActivity = styled.div`
	overflow-y: auto;
	width: 100%;
	height: 48rem;
	margin-top: 1.75rem;
	border-radius: 1.25rem;
	background-color: #262d3a;
	padding: 1.25rem;
	padding-bottom: 0;
	color: #fff;
	h3 {
		font-size: 1.25rem;
		margin-bottom: 1.25rem;
	}
	@media (max-width: 1024px) {
		width: 100%;
	}
	&::-webkit-scrollbar {
		width: 0;
	}
`;

const UserProfile = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5rem;
	padding: 0.75rem;
	border-radius: 0.75rem;
	background-color: rgba(255, 255, 255, 0.05);
	div {
		h6 {
			font-size: 14px;
			font-weight: 500;
		}
		p {
			font-size: 0.75rem;
			font-weight: 400;
			color: #878787;
		}
	}
	&:first-child {
		position: relative;
		background: linear-gradient(
			103.85deg,
			rgba(103, 99, 253, 0.1) 5.47%,
			rgba(184, 78, 241, 0.1) 96.28%
		);
		h6 {
			width: 80%;
			position: relative;
		}
		h6::after {
			 {
				content: "";
				position: absolute;
				width: 9px;
				height: 9px;
				border-radius: 50%;
				background-color: #6763fd;
				right: 0;
				top: 0.4rem;
			}
		}
	}
`;

const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
`;

const Activity = () => {
	const [datas, setDatas] = useState([]);
	// Make a request for a user with a given ID

	const getFeatureArtworks = async () => {
		try {
			const response = await axios.get(
				"https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/recent-activities"
			);
			setDatas(response.data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getFeatureArtworks();
	}, []);
	return (
		<StyledActivity>
			<h3>Recent Activity</h3>
			<UserContainer>
				{datas.map((data) => (
					<UserProfile key={data.id}>
						<img src="/images/artist2.png" alt={`${data.id}`} />
						<div>
							<h6>{data.name}</h6>
							<p>{data.message}</p>
						</div>
					</UserProfile>
				))}
			</UserContainer>
		</StyledActivity>
	);
};

export default Activity;
