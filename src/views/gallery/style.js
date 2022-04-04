import styled from "styled-components";
import { media } from "@styles";

export const SectionWrapper = styled.section`
  background-color: var(--accent);
  padding: 10vw 0;
  overflow-x: hidden;
`;
export const GridWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;

  ${media.thone`
    flex-direction: column;
    margin: 0 auto;
  `};
`;
export const ImageWrapper = styled.div`
  width: 35vw;
  height: 25vw;
  margin-right: 20px;
  display: inline-block;
  margin-top: 2vw;

  ${media.thone`
    width: 90vw;
    height: 60vw;
    margin: 1rem auto;
  `};

  div {
    width: 100%;
    height: 100%;
    border-radius: 22px;
  }
`;
export const TextWrapper = styled.div`
  max-width: 30%;
  margin: 0 auto 0 30%;

  ${media.thone`
    max-width: 100%;
    margin: 0 auto;
  `};
`;
