import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundContent = styled.div`
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

export const BackButton = styled.button`
  background-color: var(--accent-color);
  color: var(--text-color);
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`; 