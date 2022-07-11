import React from "react";
import "./SocialMediaBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXing,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons"

const SocialMediaBar = () => {
  return (
    <div className="socialmediabar-container">
      <a href="https://github.com/famouzx3">
        <FontAwesomeIcon className="icon git" icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/tim-lapp-614430207/">
        <FontAwesomeIcon className="icon linkedIn" icon={faLinkedin} />
      </a>
      <a href="https://www.xing.com/profile/Tim_Lapp2/cv">
        <FontAwesomeIcon className="icon xing" icon={faXing} />
      </a>
      <a href="https://twitter.com/famouzx3">
        <FontAwesomeIcon className="icon twitter" icon={faTwitter} />
      </a>
			<a href="mailto:timlappdev@gmail.com">
        <FontAwesomeIcon className="icon mail" icon={faAt} />
      </a>
    </div>
  );
};

export default SocialMediaBar;
