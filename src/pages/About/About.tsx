import {
  AboutWrapper,
  AboutContent,
  RightSection,
  LeftSection,
  Greeting,
  BioText,
} from "./About.styled";

export const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <LeftSection>
          <BioText>
            <p>
              Maria Nyström är en Stockholmsbaserad Fullstack-utvecklare med en
              passion för att skapa lösningar som gör skillnad.
            </p>
            <p>
              Jag trivs bäst i projekt där jag kan vara{" "}
              <strong>mer än bara en kodare</strong>. Med min kommunikativa
              förmåga tar jag gärna möten med kunder, samlar information och
              omsätter affärsbehov till tekniska lösningar. Jag är inte den som
              bara stirrar in i skärmen - jag ser helheten och förstår hur
              tekniken kan lösa verkliga problem.
            </p>
            <p>
              Min styrka ligger i att{" "}
              <strong>snabbt sätta mig in i nya uppgifter</strong> och leverera
              resultat. Jag är nyfiken, lösningsorienterad och drivs av att
              ständigt utvecklas. Med rätt stöd och utmaningar kan jag nå hur
              långt som helst.
            </p>
            <p>
              När jag inte kodar hittar du mig ofta utforskande nya tekniker
              eller samarbetande med andra kreativa människor för att bygga
              något spännande.
            </p>
          </BioText>
        </LeftSection>
        <RightSection>
          <Greeting>
            <div>
              <span>Hi!</span>
              <span>I'm</span>
            </div>
            <span>Maria</span>
          </Greeting>
        </RightSection>
      </AboutContent>
    </AboutWrapper>
  );
};
