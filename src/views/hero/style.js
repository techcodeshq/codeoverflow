import styled from "styled-components";
import { DisplayText, media } from "@styles";

export const CompWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4vw;
  overflow-x: hidden;
`;
export const ComputerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 60vw;
  color: var(--gray);
  z-index: 2;
  overflow-x: hidden;

  ${media.thone`width: 85vw;`};
  ${media.phablet`display: none;`};

  svg {
    width: inherit;
    height: inherit;
  }
`;
export const ResizeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: absolute;

  h1 {
    font-size: calc(11vw * var(--hero-resize));
    ${media.thone`font-size: calc(18vw * var(--hero-resize));`};

    @media (min-aspect-ratio: 8 / 5) {
      font-size: calc(16vh * var(--hero-resize));
    }
  }
  p {
    font-size: calc(1.5vw * var(--hero-resize));

    @media (min-aspect-ratio: 8 / 5) {
      font-size: 2vh;
    }

    ${media.tablet`
      font-size: calc(2vw * var(--hero-resize));
    `};
    ${media.thone`font-size: 16px;`};
  }
`;
export const MarqueeWrapper = styled(DisplayText)`
  padding: calc(32px * var(--hero-resize)) 0;
  position: relative;
  overflow: hidden;
  margin: 0;

  h1 {
    margin: 0;

    background: -webkit-linear-gradient(var(--theme), var(--purple));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  background: -webkit-linear-gradient(var(--theme), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const MarqueeInner = styled.div`
  width: fit-content;
  display: flex;
  flex: auto;
  flex-direction: row;
`;
export const ClippedText = styled.div`
  flex-shrink: 0;
  padding: 0 4px;
  font-smooth: always;

  background: -webkit-linear-gradient(var(--theme), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Line = styled.div`
  overflow: hidden;
  margin: 0 auto;
`;
export const OverflowWrapper = styled.div`
  overflow: hidden;
`;

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.thone`flex-direction: column;`};
`;
export const Card = styled.div`
  background-color: var(--secondary);
  padding: 0 calc(2vw * var(--hero-resize));
  border-radius: calc(25px * var(--hero-resize));
  display: flex;
  flex-direction: row;
  align-items: center;

  :not(:last-child) {
    margin-right: calc(2vw * var(--hero-resize));
  }

  p {
    font-weight: 500;
  }

  svg {
    width: calc(40px * var(--hero-resize));
    height: calc(40px * var(--hero-resize));
    margin-right: calc(1vw * var(--hero-resize));

    @media (min-aspect-ratio: 8 / 5) {
      width: calc(4vh * var(--hero-resize));
      height: calc(4vh * var(--hero-resize));
      margin-right: calc(2vh * var(--hero-resize));
    }

    ${media.thone`
      width: 18px;
      margin-right: 10px;
    `};
  }
`;
export const DescriptionWrapper = styled.div`
  width: calc(50% * var(--hero-resize));
  margin: 0 auto;

  @media (min-aspect-ratio: 8 / 5) {
    width: calc(45vh * var(--hero-resize));
  }
  ${media.thone`width: 90%;`};
`;
