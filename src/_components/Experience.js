import React, { Component } from "react";
import "../assets/css/custom.css";
import ReactTyped from "react-typed";

class Experience extends Component {
	constructor(props) {
		super(props);

		this.delayedStartUp = this.delayedStartUp.bind(this);
		this.hideCursorIcon = this.hideCursorIcon.bind(this);
		this.state = {
			show: false,
			hideCursor: true
		};
	}

	componentDidMount() {
		this.delayedStartUp();
		this.hideCursorIcon();
	}

	delayedStartUp() {
		setTimeout(() => {
			this.setState({ show: true });
		}, 1500);
	}

	hideCursorIcon() {
		setTimeout(() => {
			this.setState({ hideCursor: false });
		}, 4000);
	}

	render() {
		return (
			<div className="experience-wrapper">
				{this.state.show && (
					<h4 className="experience-text">
						<ReactTyped
							strings={[
								"<span style='color:#feca57'>Frontend</span>",
								"<span style='color:#22a7f0'>Backend</span>",
								"<span style='color:#55E6C1'>Full Stack Developer</span>"
							]}
							typeSpeed={70}
							backSpeed={70}
							backDelay={2}
							showCursor={this.state.hideCursor}
							startDelay={1000}
							smartBackspace
						/>
					</h4>
				)}
			</div>
		);
	}
}

export default Experience;
