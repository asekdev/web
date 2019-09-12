import React from "react";
import Anime from "react-anime";
import Title from "./Title";

const Bio = ({ name, title }) => {
	return (
		<div className="mt-3">
			<Anime delay={(e, i) => 1 * 1000} easing="easeOutCirc" duration={400} opacity={[0, 1]} translateY={[50, 0]}>
				<h1 className="name-header-text">{name}</h1>
			</Anime>
			<Title title={title} />
		</div>
	);
};

export default Bio;
