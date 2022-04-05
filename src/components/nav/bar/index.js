import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Container } from "@styles";
import {
  HeadStickWrapper,
  LogoWrapper,
  NavWrapper,
  NavLinkWrapper,
  NavLink,
  RightSideWrapper,
  CenterWrapper,
} from "./style";
import { Icon, Button } from "@components";

const Bar = () => {
  let items = useRef([]);

  useEffect(() => {
    gsap.from(items.current, { yPercent: -450, stagger: 0.1, delay: 1 });
  }, []);

  return (
    <HeadStickWrapper data-scroll data-scroll-sticky data-scroll-target="#___sticky">
      <Container>
        <NavWrapper id="header">
          <LogoWrapper
            onClick={() => window !== "undefined" && window.scroll.scroll.scrollTo("top")}
            ref={el => (items.current[0] = el)}>
            <Icon name="logo" />
          </LogoWrapper>
          <CenterWrapper ref={el => (items.current[1] = el)}>
            <NavLinkWrapper>
              <NavLink
                onClick={() => window !== "undefined" && window.scroll.scroll.scrollTo("#about")}>
                About
              </NavLink>
              <NavLink
                href="https://code.techcodes.org/signup"
                rel="noopener noreferrer"
                target="_blank">
                Register
              </NavLink>
              <NavLink
                onClick={() => window !== "undefined" && window.scroll.scroll.scrollTo("#faq")}>
                FAQ
              </NavLink>
            </NavLinkWrapper>
          </CenterWrapper>
          <RightSideWrapper ref={el => (items.current[2] = el)}>
            <Button href="https://code.techcodes.org/signup">Sign up now</Button>
          </RightSideWrapper>
        </NavWrapper>
      </Container>
    </HeadStickWrapper>
  );
};

export default Bar;
