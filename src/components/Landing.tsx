import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {config.developer.fullName.split(" ").map((part, index) => (
                <div key={index} className="name-part">
                  {part.toUpperCase()}
                </div>
              ))}
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="landing-tagline">ECONOMICS & DEVELOPMENT</h3>
            <div className="landing-titles">
              <h2 className="landing-title-1">RESEARCHER</h2>
              <h2 className="landing-title-2">ECONOMICS PROFESSOR</h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
