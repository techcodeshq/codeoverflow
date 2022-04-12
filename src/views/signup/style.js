import styled, { keyframes } from "styled-components";
import { media } from "@styles";

export const SectionWrapper = styled.section`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  ${media.tablet`padding-top: 20vw;`};
`;
const animate = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;
export const Area = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--background);
  width: 100vw;
  height: 100%;
  z-index: 1;
`;
export const Circles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(80, 128, 253, 0.2);
    animation: ${animate} 25s linear infinite;
    bottom: -150px;
    :nth-child(1) {
      left: 25%;
      width: 80px;
      height: 80px;
      animation-delay: 0s;
    }
    :nth-child(2) {
      left: 10%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 12s;
    }
    :nth-child(3) {
      left: 70%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
    }
    :nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-delay: 0s;
      animation-duration: 18s;
    }
    :nth-child(5) {
      left: 65%;
      width: 20px;
      height: 20px;
      animation-delay: 0s;
    }
    :nth-child(6) {
      left: 75%;
      width: 110px;
      height: 110px;
      animation-delay: 3s;
    }
    :nth-child(7) {
      left: 35%;
      width: 150px;
      height: 150px;
      animation-delay: 7s;
    }
    :nth-child(8) {
      left: 50%;
      width: 25px;
      height: 25px;
      animation-delay: 15s;
      animation-duration: 45s;
    }
    :nth-child(9) {
      left: 20%;
      width: 15px;
      height: 15px;
      animation-delay: 2s;
      animation-duration: 35s;
    }
    :nth-child(10) {
      left: 85%;
      width: 150px;
      height: 150px;
      animation-delay: 0s;
      animation-duration: 11s;
    }
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: var(--text);
  font-size: 8vw;
  margin: 0;
  padding: 4vw 0;
`;
export const FormWrapper = styled.div`
  max-width: 45%;
  margin: 0 auto;
  padding-bottom: 6vw;
  button {
    margin-top: 2vw;
    font-size: 1.5vw;
    font-weight: 600;
    ${media.tablet`font-size: 2vw;`};
    ${media.thone`font-size: 4vw;`};
  }
  ${media.tablet`max-width: 100%;`};
`;
export const SmallText = styled.p`
  font-size: 1.5vw;
  font-weight: 500;
  color: var(--undertone);
  ${media.tablet`font-size: 2vw;`};
  ${media.thone`font-size: 4vw;`};

  a {
    color: inherit;
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }
`;
export const SuccessSubmit = styled.div`
  text-align: center;
`;
export const MiddleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
