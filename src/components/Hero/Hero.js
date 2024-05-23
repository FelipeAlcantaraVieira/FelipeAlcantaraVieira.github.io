import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br />
        I'm Felipe.
      </SectionTitle>
      <SectionText>
        I'm a Developer based in Brazil with experience in Full-Stack Development.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/FelipeAlcantaraVieira'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;