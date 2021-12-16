import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseUrl } from "../BaseUrl";

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
	row-gap: 0.5rem;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.25rem;
`;

const UserProfile = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
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

const FollowButton = styled.button`
	padding: 0.375rem 0.625rem;
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;
	margin: 0;
	font-size: 0.75rem;
	color: #fff;
	background: linear-gradient(
		103.85deg,
		rgba(103, 99, 253, 1),
		rgba(184, 78, 241, 1)
	);
	&:hover {
		background: linear-gradient(
			103.85deg,
			rgba(103, 99, 253, 0.7),
			rgba(184, 78, 241, 0.7)
		);
		color: rgba(255, 255, 255, 0.7);
	}
`;

const TopArtist = () => {
	const [datas, setDatas] = useState([]);
	const [follow, setFollow] = useState([]);
	// Make a request for a user with a given ID

	const getTopArtist = async () => {
		try {
			const response = await axios.get(`${BaseUrl}/top-artist`);
			setDatas(response.data);
		} catch (error) {
			throw error;
		}
	};

	const handleEdit = (e) => {
		e.preventDefault();
		if (e.target.id === datas[e.target.id - 1].id) {
			if (follow.includes(e.target.id)) {
				setFollow(follow.filter((id) => id !== e.target.id));
			} else {
				setFollow([...follow, e.target.id]);
				follow.sort();
			}
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
					<FollowButton
						id={data.id}
						onClick={(e) => {
							handleEdit(e);
						}}
					>
						{follow[data.id - 1] === data.id ? "Following" : "Follow"}
					</FollowButton>
				</UserContainer>
			))}
		</StyledTopArtist>
	);
};

export default TopArtist;
