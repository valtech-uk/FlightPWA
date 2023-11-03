import React, { FunctionComponent } from "react";

type AboutProps = {
  someBool: boolean;
};

const About: FunctionComponent<AboutProps> = ({ someBool = true }) => {
  return <span>About page {someBool.toString()}</span>;
};

export default About;
