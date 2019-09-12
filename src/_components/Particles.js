import React from "react";
import Particles from "react-particles-js";

const CustomParticles = () => {
	return (
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
	);
};

export default CustomParticles;
