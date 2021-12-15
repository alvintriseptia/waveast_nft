import React, { useState } from "react";
import styled from "styled-components";
import NavListMobile from "./NavListMobile";

const StyledBurger = styled.div`
	display: none;
	@media (max-width: 767px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
		position: fixed;
		z-index: ${({ open }) => (open ? "99" : "10")};
		width: 2rem;
		height: 2rem;
		top: 1.5rem;
		left: 1.25rem;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background-color: #fff;
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Hamburger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<NavListMobile opened={open} />
		</>
	);
};

export default Hamburger;
