import React from "react";
import ASLogo from "../assets/images/as-logo.png";
import Anime from "react-anime";

const Logo = () => {
	return (
		<div className="col-lg-12 col-md-12 col-sm-12 mt-3">
			<div>
				<Anime delay={(e, i) => 1 * 300} opacity={[0, 1]} duration={10 * 1000}>
					<img src={ASLogo} className="as-logo" alt="asek-logo" />
				</Anime>
			</div>
		</div>
	);
};

export default Logo;
