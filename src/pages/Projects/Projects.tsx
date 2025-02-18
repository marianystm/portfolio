import { ProjectsWrapper, ProjectsGrid, ProjectCard, ProjectTitle } from "./Projects.styled";

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>My Projects</h1>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Project 1</ProjectTitle>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 2</ProjectTitle>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsWrapper>
  );
}; 