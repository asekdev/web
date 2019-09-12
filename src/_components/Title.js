import React, { Component } from "react";
import "../assets/css/custom.css";
import ReactTyped from "react-typed";

class Title extends Component {
	constructor(props) {
		super(props);

		this.delayedStartUp = this.delayedStartUp.bind(this);
		this.state = {
			show: false,
			hideCursor: true
		};
	}

	componentDidMount() {
		this.delayedStartUp();
	}

	delayedStartUp() {
		setTimeout(() => {
			this.setState({ show: true });
		}, 1500);
	}

	render() {
		return (
			<div className="experience-wrapper">
				{this.state.show && (
					<h4 className="experience-text">
						<ReactTyped
							strings={[`<span style='color:#9fff9f'>${this.props.title}</span>`]}
							typeSpeed={70}
							backSpeed={70}
							backDelay={2}
							showCursor={false}
							startDelay={1000}
							smartBackspace
						/>
					</h4>
				)}
			</div>
		);
	}
}

export default Title;
