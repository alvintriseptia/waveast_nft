import React from "react";
import styled from "styled-components";

const Icons = ({ iconName, alt }) => {
	const Icon = styled.div`
		p {
			display: none;
		}
		@media (max-width: 767px) {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 2.25rem;
			cursor: pointer;
			p {
				display: block;
				text-transform: capitalize;
				margin-top: -0.5rem;
				font-size: 1rem;
				color: #fff;
			}
		}
	`;
	return (
		<Icon>
			<a href={`#${alt}`}>
				<img src={`/icons/${iconName}`} alt={`${alt}`} />
			</a>
			{alt && <p>{alt}</p>}
		</Icon>
	);
};

export default Icons;
