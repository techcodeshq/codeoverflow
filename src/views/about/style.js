import styled from "styled-components";
import { media, TitleText } from "@styles";

export const SectionWrapper = styled.section`
  position: relative;
  max-height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 10vw 0;
`;
export const ContainerWrapper = styled.div`
  max-width: 85%;
`;
export const DescriptionWrapper = styled.div`
  max-width: 68%;

  ${media.thone`max-width: 100%;`};
`;
export const OverflowWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const TransitionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  color: var(--alwayswhite);
`;
export const RectWrap = styled.div`
  --rect-height: calc(100% / 5);
  width: 100vw;
  height: var(--rect-height);
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: absolute;

  :nth-child(1) {
    z-index: 1;
    top: 0;
  }
  :nth-child(2) {
    z-index: 2;
    top: var(--rect-height);
  }
  :nth-child(3) {
    z-index: 3;
    top: calc(2 * var(--rect-height));
  }
  :nth-child(4) {
    z-index: 4;
    top: calc(3 * var(--rect-height));
  }
  :nth-child(5) {
    z-index: 5;
    top: calc(4 * var(--rect-height));
  }
  :nth-child(6) {
    z-index: 6;
    background: #170312;
  }
  :nth-child(7) {
    z-index: 7;
    background: #9a8c98;
  }
  :nth-child(8) {
    z-index: 8;
    background: #2f1b25;
  }
  :nth-child(9) {
    z-index: 9;
    background: #4c2c69;
  }
  :nth-child(10) {
    z-index: 10;
    background: #143642;
  }
  :nth-child(11) {
    z-index: 11;
    background: #3a5743;
  }

  p {
    margin: 0;
  }
`;
export const ScheduleWrapper = styled.div`
  text-align: center;
  max-width: 60%;
  margin: 0 auto;
  padding: 10vmin 0;
  ${media.thone`max-width: 100%;`};

  @media (min-aspect-ratio: 8 / 5) {
    max-width: 100vh;
  }

  h1 {
    margin: 0;
  }
`;

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  p {
    font-weight: 600;
  }
`;
