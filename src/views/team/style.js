import styled from "styled-components";
import { media } from "@styles";

export const TeamSection = styled.section`
  padding: 10vw 0;
`;
export const TopTextWrapper = styled.div`
  text-align: center;
  max-width: 60%;
  margin: 0 auto;
  ${media.thone`max-width: 100%;`};

  @media (min-aspect-ratio: 8 / 5) {
    max-width: 100vh;
  }

  h1 {
    margin: 0;
  }
`;
