import React from "react";
import Anime from "react-anime";
import githubImg from "../assets/images/github.png";
import linkedinImg from "../assets/images/linkedin.png";
import SocialButton from "./SocialButton";

const Contact = ({ contactDetails }) => {
	const { github, linkedIn } = contactDetails;

	return (
		<div className="col-lg-12 mt-4">
			<Anime delay={(e, i) => 1 * 1500} easing="easeOutCirc" opacity={[0, 1]} scale={[0.55, 1]}>
				<div className="text-center mb-4">
					<SocialButton image={githubImg} link={github} alt="gitlink" />
					<SocialButton image={linkedinImg} link={linkedIn} alt="linkedInlink" />
				</div>
			</Anime>
		</div>
	);
};

export default Contact;
