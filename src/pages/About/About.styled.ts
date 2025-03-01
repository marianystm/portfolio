import styled from "styled-components";

export const AboutWrapper = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  display: flex;
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
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 4rem;
`;

export const Greeting = styled.h1`
  font-family: "Anton";
  font-size: 15rem;
  color: var(--accent-color);
  line-height: 1;
  text-align: left;

  div {
    display: flex;
    gap: 2rem;
  }

  span {
    display: inline-block;
  }

  div + span {
    display: block;
    letter-spacing: -3.1px;
    margin-top: -0.18em;
  }
`;

export const BioText = styled.div`
  font-family: "Poppins";
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
