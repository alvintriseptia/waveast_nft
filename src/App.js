import {
	Navbar,
	Headline,
	Explore,
	Cards,
	TopArtist,
	Activity,
} from "./components/";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: 8.875rem;
	margin-right: 1.25rem;
	@media (max-width: 1024px) {
		padding: 1rem;
	}
	@media (max-width: 767px) {
		margin-left: 0;
	}
`;
const Body = styled.section`
	width: 73%;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

const Sidebar = styled.aside`
	width: 27%;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

function App() {
	return (
		<>
			<Navbar />
			<Container>
				<Body>
					<Headline />
					<Explore />
					<Cards />
				</Body>
				<Sidebar>
					<TopArtist />
					<Activity />
				</Sidebar>
			</Container>
		</>
	);
}

export default App;
