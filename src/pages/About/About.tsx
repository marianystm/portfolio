import { AboutWrapper, AboutContent, AboutTitle } from "./About.styled";

export const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>
        <p>
          Frontend developer with a passion for creating beautiful and
          functional web applications.
        </p>
      </AboutContent>
    </AboutWrapper>
  );
};
