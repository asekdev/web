import React from "react";
import { shallow } from "enzyme";
import SocialButton from "../_components/SocialButton";

describe("Social Component", () => {
	it("Should add the contact props successfully", () => {
		const props = {
			link: "github.com",
			alt: "gitlink"
		};
		const wrapper = shallow(<SocialButton {...props} />);

		expect(wrapper.find("a").props().href).toEqual("github.com");
		expect(wrapper.find(".social-image").props().alt).toEqual("gitlink");
	});
});
