import React from "react";
import "../App.css";
import "../assets/css/bootstrap.css";
import "../assets/css/custom.css";
import Experience from "./Experience";
import SocialButton from "./SocialButton";
import githubImg from "../assets/images/github.png";
import linkedinImg from "../assets/images/linkedin.png";
import ASLogo from "../assets/images/as-logo.png";

import Anime from "react-anime";

const Home = () => {
	const gitlink = "https://github.com/asekdev";
	const linkedInlink = "https://www.linkedin.com/in/andrew-sekulovski-21305a15a/";

	return (
		<div className="top-wrapper">
			<div className="container">
				<div className="row" id="main">
					<div className="col-lg-12 col-md-12 col-sm-12 mt-3">
						<div>
							<Anime delay={(e, i) => 1 * 300} scale={[0, 1]}>
								<img src={ASLogo} className="as-logo" />
							</Anime>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="mt-3">
							<Anime
								delay={(e, i) => 1 * 1000}
								easing="easeOutCirc"
								duration={500}
								opacity={[0, 1]}
								translateY={[50, 0]}
							>
								<h1 className="name-header-text">Andrew Sekulovski</h1>
							</Anime>
							<Experience />
						</div>
						<div className="bio-mt">
							<div className="row">
								<Anime delay={(e, i) => 1 * 1500} easing="easeOutCirc" opacity={[0, 1]} scale={[0.55, 1]}>
									<div className="col-lg-8 offset-lg-2 ofcol-md-10 col-sm-12">
										<h5 className="bio-text">
											Passionate about developing clean, readable, modular and maintainable code. Alongside a
											frictionless, intuitive UI – keeping up to date with the latest cutting edge web technologies.
										</h5>
										<h6 className="contact-text mt-5">
											Want to chat? Hit me up on{" "}
											<strong>
												<span className="linkedInText">Linked In</span>
											</strong>
										</h6>
									</div>
								</Anime>
								<div className="col-lg-12 mt-1">
									<Anime delay={(e, i) => 1 * 1500} easing="easeOutCirc" opacity={[0, 1]} scale={[0.55, 1]}>
										<div className="text-center mb-4">
											<SocialButton image={githubImg} link={gitlink} />
											<SocialButton image={linkedinImg} link={linkedInlink} />
										</div>
									</Anime>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
