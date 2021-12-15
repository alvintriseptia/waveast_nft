import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledTopArtist = styled.div`
	overflow-y: auto;
	width: 100%;
	height: 20rem;
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

const UserContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.25rem;
`;

const UserProfile = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5rem;
	margin-right: 1.25rem;
	span {
		font-size: 1.25rem;
		font-weight: 600;
	}
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
`;

const TopArtist = () => {
	const [datas, setDatas] = useState([]);
	// Make a request for a user with a given ID

	const getTopArtist = async () => {
		try {
			const response = await axios.get(
				"https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/top-artist"
			);
			setDatas(response.data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getTopArtist();
	}, []);

	return (
		<StyledTopArtist>
			<h3>Top Artist</h3>
			{datas.map((data) => (
				<UserContainer key={data.id}>
					<UserProfile>
						<span>{data.id}.</span>
						<img src="/images/artist1.png" alt={`${data.username}`} />
						<div>
							<h6>{data.name}</h6>
							<p>@{data.username}</p>
						</div>
					</UserProfile>
				</UserContainer>
			))}
		</StyledTopArtist>
	);
};

export default TopArtist;
