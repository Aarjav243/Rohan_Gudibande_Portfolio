import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
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
