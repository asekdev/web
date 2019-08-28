import React, { Component } from "react";
import "./App.css";
import "./assets/css/bootstrap.css";
import Home from "./_components/Home";
import Particles from "react-particles-js";
import { isMobile } from "react-device-detect";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let numNodes = isMobile ? 50 : 100;

		return (
			<div className="App">
				<div id="particles">
					<Particles
						params={{
							particles: {
								number: {
									value: 200
								},
								interactivity: {
									events: {
										onhover: {
											enable: false,
											mode: "repulse"
										},
										resize: true
									}
								},
								line_linked: {
									enable: false,
									opacity: 0.04
								},
								move: {
									direction: "none",
									random: true,
									speed: 1
								},
								size: {
									value: 1
								},
								opacity: {
									anim: {
										enable: true,
										speed: 1,
										opacity_min: 0.5
									}
								}
							},
							retina_detect: true
						}}
					/>
					<Home />
				</div>
				<div />
			</div>
		);
	}
}

export default App;
