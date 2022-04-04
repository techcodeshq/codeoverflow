import styled from "styled-components";
import { media, BigText, SmallText } from "@styles";

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 6vw 0;
  overflow: hidden;
  background-color: var(--bright);
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  ${media.tablet`
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 8vw 0;
  `};
`;
export const LeftCol = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  ${media.tablet`
    grid-column-start: 1;
    grid-column-end: 2;
  `};
  ${media.thone`grid-column-end: 9;`};
`;
export const MiddleCol = styled.div`
  grid-column-start: 4;
  grid-column-end: 9;
  ${media.tablet`
    grid-column-start: 3;
    grid-column-end: 9;
  `};
  ${media.thone`
    grid-column-start: 1;
    grid-column-end: 9;
  `};
`;
export const RightColOne = styled.div`
  grid-column-start: 9;
  grid-column-end: 11;
  ${media.tablet`
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    justify-content: space-between;
  `};
  ${media.thone`
    grid-column-start: 1;
    grid-column-end: 9;
  `};
`;
export const RightColTwo = styled.div`
  grid-column-start: 11;
  grid-column-end: 13;
  ${media.tablet`
    grid-column-start: 6;
    grid-column-end: 12;
  `};
  ${media.thone`
    grid-column-start: 1;
    grid-column-end: 9;
  `};
`;
export const Logo = styled.img`
  width: 12vw;
  ${media.thone`width: 24vw;`};
`;
export const TitleText = styled(BigText)``;

// Forms
export const StyledFrom = styled.form`
  position: relative;
  max-width: 22vw;
  margin-top: 3vw;
  ${media.tablet`max-width: 100%;`};
  ${media.thone`margin-top: 6vw;`};
`;
export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  font-size: 1.25vw;
  line-height: 1.5625vw;
  ${media.desktop`
    font-size: 2vw;
    line-height: 1.2;
    `};
  ${media.tablet`
    font-size: 2.4vw;
    line-height: 1.3;
    `};
  ${media.thone`
    font-size: 22px;
    line-height: 1.275;
    `};
  ${media.phone`
    font-size: 18px;
    line-height: 24px;
    `};
  label {
    position: absolute !important;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    border: 0;
    touch-action: manipulation;
  }
  input {
    font-size: inherit;
    line-height: inherit;
    padding: 0.6vw 0;
    outline: none;
    width: 100%;
    border-bottom: 1px solid var(--secondary);
    background: transparent;
    font-weight: 500;
    color: var(--text);
    transition: 0.5s all cubic-bezier(0.19, 1, 0.22, 1);
    ${media.tablet`padding: 1vw 0;`};
    ${media.thone`padding: 2.4vw 0;`};
    :hover,
    :focus {
      border-bottom: 1px solid var(--text);
    }
  }
`;
export const ErrorCustom = styled(SmallText)`
  color: var(--error);
  margin: 0.5vw 0;
`;
export const FormButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.75vw;
  height: 2.75vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  ${media.tablet`
    width: 5vw;
    height: 5vw;
  `};
  ${media.thone`
    width: 11.5vw;
    height: 11.5vw;
  `};
  :hover {
    :before {
      transform: translateY(0%);
    }
    svg {
      transform: translateX(0);
      fill: var(--bright);
    }
  }
  :before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: var(--text);
    border-radius: 5px 5px 0 0;
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateY(102%);
  }
  span {
    position: absolute !important;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    border: 0;
  }
  svg {
    width: 2rem;
    transform: translate(0.66667rem);
    fill: var(--text);
    position: relative;
    z-index: 2;
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      fill 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

// Labels
export const FooterText = styled(SmallText)`
  margin-top: 0;
  a {
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
  }
  ${props => props.noMargin && `margin: 0;`};
  ${props => props.spaced && `margin-top: 4vw;`};
  ${media.tablet`margin-top: 0!important;`};
`;
export const FooterLinkWrapper = styled.div`
  position: relative;
  a {
    font-size: 1.25vw;
    line-height: 1.5625vw;
    position: relative;
    ${media.desktop`
      font-size: 2vw;
      line-height: 1.2;
    `};
    ${media.tablet`
      font-size: 2.4vw;
      line-height: 1.3;
    `};
    ${media.thone`
      font-size: 22px;
      line-height: 1.275;
    `};
    ${media.phone`
      font-size: 18px;
      line-height: 24px;
    `};
  }
`;
export const ContactWrapper = styled.div`
  margin-top: 2vw;
  position: relative;
`;
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20vw;
  ${media.thone`flex-direction: column;`};
`;
