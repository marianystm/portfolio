import styled from "styled-components";

export const AboutWrapper = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutContent = styled.div`
  max-width: 800px;
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }
`;

export const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;
