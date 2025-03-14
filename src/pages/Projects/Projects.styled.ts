import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
    color: var(--text-color);
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled.article`
  background-color: var(--primary-color);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectTitle = styled.h2`
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
