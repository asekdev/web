import React from "react";
import "../assets/css/hover-min.css";

const SocialButton = ({ image, link, alt }) => {
	return (
		<div className="socialButtonDiv hvr-wobble-vertical" style={{ zIndex: 10000002 }}>
			<div className="social-img-wrapper">
				<a target="_blank" href={link}>
					<img className="social-image" src={image} width="50%" alt={alt} />
				</a>
			</div>
		</div>
	);
};

export default SocialButton;
