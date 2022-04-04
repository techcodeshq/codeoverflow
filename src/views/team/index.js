import React, { useEffect, useRef } from "react";
import { Container, NormalText, TitleText } from "@styles";
import { TeamSection, TopTextWrapper } from "./style";

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <TopTextWrapper>
          <TitleText>The Team</TitleText>
          <NormalText>
            The hearts, minds, and souls behind the TechCodes organization changing the face of
            STEM.
          </NormalText>
        </TopTextWrapper>
      </Container>
    </TeamSection>
  );
};

export default Team;
