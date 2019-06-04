import React, { Component } from "react";
import "../assets/css/hover-min.css";

class SocialButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="socialButtonDiv hvr-wobble-vertical">
				<div className="social-img-wrapper">
					<a target="_blank" href={this.props.link}>
						<img className="social-image" src={this.props.image} width="50%" />
					</a>
				</div>
			</div>
		);
	}
}

export default SocialButton;
