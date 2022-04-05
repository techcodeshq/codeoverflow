import styled from "styled-components";
import { media } from "@styles";

export const HeadStickWrapper = styled.header`
  width: 100vw;
  display: block;
  position: fixed;
  z-index: 996;
`;
export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  transition: transform 0.35s ease;
`;
export const LogoWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-self: center;
  flex: 0.5;
  cursor: pointer;

  svg {
    width: 70px;
    height: 70px;
    position: relative;
    ${media.thone`height: 40px;`};
  }
`;
export const CenterWrapper = styled.div`
  flex: 1;
  text-align: center;

  ${media.desktop`display: none;`};
`;
export const NavLinkWrapper = styled.div`
  background-color: var(--foreground);
  display: inline-block;
  padding: 0 22px;
  border-radius: 70px;
`;
export const NavLink = styled.a`
  display: inline-block;
  padding: 22px;
  color: var(--text);
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  transition: color 0.1s linear;
  cursor: pointer;

  ${media.bigDesktop`padding: 18px;`};

  :hover {
    color: var(--theme);
  }
`;
export const RightSideWrapper = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: flex-end;
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
