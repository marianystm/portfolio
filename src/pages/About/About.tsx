import {
  AboutWrapper,
  AboutContent,
  RightSection,
  LeftSection,
  Greeting,
  BioText,
  Subtitle,
} from "./About.styled";

export const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <LeftSection>
          <Greeting>Developer</Greeting>
          <Subtitle>
            Currently making great things at{" "}
            <a
              href="https://www.wndy.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wndy.se
            </a>
          </Subtitle>
        </LeftSection>
        <RightSection>
          <BioText>{/* Innehåll för höger sektion */}</BioText>
        </RightSection>
      </AboutContent>
    </AboutWrapper>
  );
};
