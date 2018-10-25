import React, { Component } from 'react';
import './App.css';
import './assets/css/bootstrap.css';
import Home from './_components/Home';
import Particles from 'react-particles-js';

class App extends Component {

	constructor(props) {
		super(props);

	}

  render() {
    return (
      <div className="App">
        <div id="particles">
			<Particles
			params={{
			"particles": {
				"number": {
					"value": 100,
					// `"density": {
					//     "enable": false,
					//     "value_area": 1000
					// }`
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": false,
							"mode": "repulse"
						},
						"resize": true
					},
				},
				"line_linked": {
					"enable": true,
					"opacity": 0.04
				},
				"move": {
					"direction": "none",
					"random": true,
					"speed": 2
				},
				"size": {
					"value": 2
				},
				"opacity": {
					"anim": {
						"enable": true,
						"speed": 2,
						"opacity_min": 0.05
					}
				}
			},
			"retina_detect": true
		}} />
		<Home />		
		</div>
      </div>
    );
  }
}

export default App;