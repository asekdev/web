import React from "react";
import "../App.css";
import "../assets/css/bootstrap.css";
import "../assets/css/custom.css";
import Logo from "./Logo";
import Bio from "./Bio";
import Contact from "./Contact";
import About from "./About";
import Info from "../info";

const Home = () => {
	return (
		<div className="top-wrapper">
			<div className="container">
				<div className="row" id="main">
					<Logo />
					<div className="col-lg-12 col-md-12 col-sm-12">
						<Bio name={Info.name} title={Info.title} />
						<div className="bio-mt">
							<div className="row">
								<About about={Info.about} />
								<Contact contactDetails={Info.contact} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
