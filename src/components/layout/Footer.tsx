"use client";

import SocialLinks from "../cta/SocialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">Designed by Jason Woitalla</div>
          <div className="column">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
