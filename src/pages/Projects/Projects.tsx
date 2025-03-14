import {
  ProjectsWrapper,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
} from "./Projects.styled";
import { HeaderSection, InfoItem, GlobalStyle } from "../About/About.styled";

export const Projects = () => {
  return (
    <ProjectsWrapper>
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

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>My Projects</h1>
        <ProjectsGrid>
          <ProjectCard>
            <ProjectTitle>Project 1</ProjectTitle>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Project 2</ProjectTitle>
          </ProjectCard>
        </ProjectsGrid>
      </div>
    </ProjectsWrapper>
  );
};
