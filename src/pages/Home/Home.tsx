import { HomeWrapper, HeroSection, Name, Title } from "./Home.styled.ts";

export const Home = () => {
  return (
    <HomeWrapper>
      <HeroSection>
        <Name>
          <span>Maria</span>
          <span>Nyström</span>
        </Name>
        <Title>
          AI-Savvy Fullstack Developer | The Next Generation of Tech
        </Title>
      </HeroSection>
    </HomeWrapper>
  );
};
