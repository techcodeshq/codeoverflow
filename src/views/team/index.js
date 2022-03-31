import React from "react";
import { Container, NormalText, TitleText } from "@styles";
import { TeamSection, TopTextWrapper } from "./style";

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <TopTextWrapper>
          <TitleText>The Team</TitleText>
          <NormalText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </NormalText>
        </TopTextWrapper>
      </Container>
    </TeamSection>
  );
};

export default Team;
