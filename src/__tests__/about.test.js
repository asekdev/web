import React from "react";
import { shallow } from "enzyme";
import About from "../_components/About";

describe("About component", () => {
  it("Should render the prop text successfully", () => {
    const aboutComponent = shallow(<About about="Some data..." />);
    let drillDown = aboutComponent.props().children.props.children.props
      .children;

    expect(drillDown).toEqual("Some data...");
  });
});
