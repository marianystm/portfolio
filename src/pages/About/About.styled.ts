import styled from "styled-components";

export const AboutWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 4rem;
  padding-top: 1rem;
  margin-bottom: 4rem;
  gap: 4rem;
`;

export const Name = styled.h1`
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: var(--text-color);
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const InfoItem = styled.div`
  margin-top: 0;

  h3 {
    font-family: var(--font-primary);
    font-size: 1.2rem;
    color: var(--text-color);
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    text-transform: uppercase;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    position: relative;
    transition: color 0.5s ease;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: var(--accent-color);
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.5s ease;
    }

    &:hover {
      color: var(--accent-color);

      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

export const AboutContent = styled.div`
  flex: 1;
  display: flex;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  margin-top: -4rem;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 4rem;
  margin-top: -4rem;
`;

export const Greeting = styled.h1`
  font-family: "Anton";
  font-size: 12rem;
  color: var(--accent-color);
  line-height: 1;
  text-align: left;
  margin-bottom: 0.5rem;
  letter-spacing: -2px;
`;

export const Subtitle = styled.h2`
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: var(--text-color);
  font-weight: 400;
  line-height: 1.4;
  margin-top: 0;
  text-transform: uppercase;
  padding-left: 4rem;

  a {
    color: var(--text-color);
    text-decoration: none;
    position: relative;
    transition: color 0.5s ease;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: var(--accent-color);
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.5s ease;
    }

    &:hover {
      color: var(--accent-color);

      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

export const BioText = styled.div`
  font-family: var(--font-primary);
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-color);

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: var(--accent-color);
    font-weight: 500;
  }
`;
