import React, { useState, useCallback, useEffect } from "react";
import { Container } from "@styles";
import {
  HeadStickWrapper,
  LogoWrapper,
  NavWrapper,
  NavLinkWrapper,
  NavLink,
  RightSideWrapper,
  CenterWrapper,
  RightWrapper,
  MenuButton,
  BtnMenuBox,
} from "./style";
import { Icon, Button } from "@components";

const Bar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const handleKeydown = useCallback(
    e => {
      if (!menuOpen) return;

      if (e.which === 27 || e.key === "Escape") toggleMenu();
    },
    [menuOpen, toggleMenu],
  );

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("keydown", e => handleKeydown(e));

      return () => {
        window.removeEventListener("keydown", e => handleKeydown(e));
      };
    }, 100);
  }, [handleKeydown]);

  return (
    <HeadStickWrapper data-scroll data-scroll-sticky data-scroll-target="#___sticky">
      <Container>
        <NavWrapper id="header">
          <LogoWrapper to="/">
            <Icon name="logo" />
          </LogoWrapper>
          <CenterWrapper>
            <NavLinkWrapper>
              <NavLink href="">About</NavLink>
              <NavLink href="">Register</NavLink>
              <NavLink href="">Sponsors</NavLink>
              <NavLink href="">FAQ</NavLink>
            </NavLinkWrapper>
          </CenterWrapper>
          <RightSideWrapper>
            <Button to="/signup">Sign up now</Button>
            <MenuButton aria-label="menu" onClick={toggleMenu}>
              <BtnMenuBox menuOpen={menuOpen}>
                <span />
                <span />
              </BtnMenuBox>
            </MenuButton>
          </RightSideWrapper>
        </NavWrapper>
      </Container>
    </HeadStickWrapper>
  );
};

export default Bar;
