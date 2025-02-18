import styled from "styled-components";

export const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const HeroSection = styled.section`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h1`
  font-family: "Anton";
  font-size: 15rem;
  margin-bottom: 4rem;
  color: var(--accent-color);
  text-align: center;
  line-height: 1;

  span {
    display: block;
  }

  span:first-child {
    line-height: 0.8;
    letter-spacing: 2.1px;
    margin-bottom: 0.05em;
  }

  span:last-child {
    letter-spacing: -3.1px;
    margin-top: -0.18em;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins";
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--accent-color);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 1.5px;
  text-align: center;
`;
