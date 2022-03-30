import styled from "styled-components";
import { DisplayText } from "@styles";

export const CompWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 4vw;
`;
export const MarqueeWrapper = styled(DisplayText)`
  padding: 32px 0;
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
export const Line = styled.div``;
export const OverflowWrapper = styled.div`
  overflow: hidden;
`;

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
  background-color: var(--secondary);
  padding: 0 2vw;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;

  :not(:last-child) {
    margin-right: 2vw;
  }

  p {
    font-weight: 500;
  }

  svg {
    width: 40px;
    height: 40px;
    margin-right: 1vw;
  }
`;
export const DescriptionWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
