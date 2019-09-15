import React from "react";
import Anime from "react-anime";

const About = ({ about }) => {
  return (
    <Anime
      delay={(e, i) => 1 * 1500}
      easing="easeOutCirc"
      opacity={[0, 1]}
      scale={[0.55, 1]}
    >
      <div className="col-lg-8 offset-lg-2 ofcol-md-10 col-sm-12">
        <h5 className="bio-text">{about}</h5>
      </div>
    </Anime>
  );
};

export default About;
