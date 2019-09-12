import React, { Component } from "react";
import "../assets/css/custom.css";
import "../assets/css/custom.css";
import RubberBand from "react-reveal/RubberBand";

class Title extends Component {
	constructor(props) {
		super(props);

		this.delayedStartUp = this.delayedStartUp.bind(this);
		this.state = {
			show: false
		};
	}

	componentDidMount() {
		this.delayedStartUp();
	}

	delayedStartUp() {
		setTimeout(() => {
			this.setState({ show: true });
		}, 2200);
	}

	render() {
		return (
			<div className="experience-wrapper">
				{this.state.show && (
					<RubberBand>
						<h4 className="experience-text">{this.props.title}</h4>
					</RubberBand>
				)}
			</div>
		);
	}
}

export default Title;
