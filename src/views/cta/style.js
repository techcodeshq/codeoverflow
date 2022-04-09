import styled from "styled-components";
import { media } from "@styles";

export const PillWrapper = styled.section`
  background-color: var(--secondary);
  border-radius: 845px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 10vw 0;
  ${media.thone`padding: 12vw 5.1vw;`};

  a {
    font-size: 1vw;
    font-weight: 600;
    padding: 0.4vw 1.2vw;
    ${media.tablet`
      font-size: 2vw;
      padding: 1vw 2vw;
      margin-right: 2vw;
    `};
    ${media.thone`
      font-size: 3vw;
      padding: 1.4vw 4vw;
      margin-right: 4vw;
    `};
    ${media.phone`font-size: 3.5vw;`};
  }
`;
export const TextWrapper = styled.div`
  max-width: 60%;
  ${media.thone`max-width: 100%;`};

  h1 {
    margin-top: 0;
  }
`;
