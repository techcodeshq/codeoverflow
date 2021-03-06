import React from "react";
import PropTypes from "prop-types";
import IconTechcodes from "./techcodes";
import IconLogo from "./logo";
import IconLinkedin from "./linkedin";
import IconInstagram from "./instagram";
import IconTwitter from "./twitter";
import IconGithub from "./github";
import IconYoutube from "./youtube";
import IconMoon from "./moon";
import IconSun from "./sun";
import IconClose from "./close";
import IconPin from "./pin";
import IconCalendar from "./calendar";
import IconDollar from "./dollar";

const Icon = ({ name }) => {
  switch (name) {
    case "techcodes":
      return <IconTechcodes />;
    case "logo":
      return <IconLogo />;
    case "instagram":
      return <IconInstagram />;
    case "linkedin":
      return <IconLinkedin />;
    case "twitter":
      return <IconTwitter />;
    case "github":
      return <IconGithub />;
    case "youtube":
      return <IconYoutube />;
    case "sun":
      return <IconSun />;
    case "moon":
      return <IconMoon />;
    case "close":
      return <IconClose />;
    case "pin":
      return <IconPin />;
    case "calendar":
      return <IconCalendar />;
    case "dollar":
      return <IconDollar />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
