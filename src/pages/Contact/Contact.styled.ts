import styled from "styled-components";

export const ContactWrapper = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactContent = styled.div`
  max-width: 600px;
  text-align: center;
`;

export const ContactTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  a {
    color: var(--text-color);
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-color);
    }
  }
`;
