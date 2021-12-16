import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";

const StyledCards = styled.div`
	display: flex;
	column-gap: 1.5rem;
	row-gap: 1.75rem;
	flex-wrap: wrap;
	color: #fff;
	@media (max-width: 1024px) {
		justify-content: center;
	}
	@media (max-width: 767px) {
		flex-wrap: nowrap;
		justify-content: flex-start;
		overflow-x: auto;
		&::-webkit-scrollbar {
			width: 0;
		}
	}
`;

const Cards = () => {
	const [datas, setDatas] = useState([]);
	// Make a request for a user with a given ID

	const getFeatureArtworks = async () => {
		try {
			const response = await axios.get(`${BaseUrl}//featured-artworks`);
			setDatas(response.data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getFeatureArtworks();
	}, []);

	return (
		<StyledCards>
			{datas.map((data) => (
				<Card key={data.id} data={data} />
			))}
		</StyledCards>
	);
};

export default Cards;
