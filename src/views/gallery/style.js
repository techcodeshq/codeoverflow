import styled from "styled-components";
import { media } from "@styles";

export const SectionWrapper = styled.section`
  background-color: var(--accent);
  padding: 10vw 0;
  overflow-x: hidden;
`;
export const TextWrapper = styled.div`
  max-width: 30%;
  margin: 0 auto 0 30%;

  p {
    font-weight: 600;
  }

  ${media.thone`
    max-width: 100%;
    margin: 0 auto;
  `};
`;

export const GallerySection = styled.div`
  display: block;
  position: relative;
`;
export const ScaleWrapper = styled.div`
  transform-origin: center bottom;
  will-change: transform;
`;
export const RowsWrapper = styled.div`
  position: sticky;
  overflow: hidden;
  top: calc(50% - 484.5px);
`;
export const GridWrapper = styled.div`
  white-space: nowrap;
  position: relative;

  :nth-child(2) {
    transform-origin: 40% center;
  }

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
    height: 40vh;
  `};

  div {
    width: 100%;
    height: 100%;
    border-radius: 22px;
  }
`;
