import React from "react";
import Navbar from "./navbar.jsx";
import Body from "./ body.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="bg-dark">
			<Navbar></Navbar>
			<Body></Body>
			<Footer></Footer>
		</div>
	);
};

export default Home;
