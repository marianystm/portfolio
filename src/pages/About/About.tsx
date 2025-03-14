import {
  AboutWrapper,
  AboutContent,
  RightSection,
  LeftSection,
  Greeting,
  BioText,
  Subtitle,
  HeaderSection,
  InfoItem,
  GlobalStyle,
} from "./About.styled";

export const About = () => {
  return (
    <AboutWrapper>
      <GlobalStyle />
      <HeaderSection>
        <InfoItem>
          <h3>
            <a
              href="/"
              style={{
                color: "inherit",
                textDecoration: "none",
                pointerEvents: "auto",
                cursor: "pointer",
              }}
              className="no-hover"
            >
              MARIA NYSTRÖM
            </a>
          </h3>
        </InfoItem>

        <InfoItem>
          <h3>
            DEVELOPER
            <br />
            AT{" "}
            <a
              href="https://www.wndy.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WNDY.SE
            </a>
          </h3>
        </InfoItem>

        <InfoItem>
          <h3>
            BASED IN
            <br />
            STOCKHOLM
          </h3>
        </InfoItem>
      </HeaderSection>

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
