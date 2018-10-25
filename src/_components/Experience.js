import React, {Component} from 'react';
import '../assets/css/custom.css';
import ReactTyped from 'react-typed';

class Experience extends Component {
      
    render() {
        return(
            <div className="experience-wrapper">
            <h4 className="experience-text">
                <ReactTyped strings={["<span style='color:#eb3b5a'>UI/UX</span>",
                                      "<span style='color:#ffdd59'>Frontend</span>",
                                      "<span style='color:#22a7f0'>Backend</span>",
                                      "<span style='color:#55E6C1'>Full Stack Developer</span>",     
                                    ]}
                typeSpeed={50}
                backSpeed={70}
                backDelay={2}
                showCursor={false}
                startDelay={1800}
                smartBackspace/></h4>
            </div>
        );
    }
}

export default Experience;