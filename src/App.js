import React from "react";
import "./App.css";
import "./assets/css/bootstrap.css";
import Home from "./_components/Home";
import CustomParticles from "./_components/Particles";

const App = () => {
	return (
		<div className="App">
			<div id="particles">
				<CustomParticles />
				<Home />
			</div>
			<div />
		</div>
	);
};

export default App;
