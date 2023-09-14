import React from "react";
import Banner from "./Banner";
import About from "./About";
import Articles from "./Articles";

const Body = () => {
	return (
		<div className=" flex flex-col ">
			<Banner />
			<About />
			<Articles />
		</div>
	);
};

export default Body;
