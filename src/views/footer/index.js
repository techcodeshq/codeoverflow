import React, { useEffect, useRef } from "react";
import { Icon, SOCIALS } from "@components";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Container } from "@styles";
import { Link } from "gatsby";
import {
  FooterWrapper,
  GridContainer,
  FooterText,
  Col,
  LabelText,
  ColContainer,
  LinkContainer,
  SocialCol,
  Socials,
  CreditWrapper,
  CreditsLink,
  TogglerWrapper,
} from "./style";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ data }) => {
  let footerContainer = useRef(null);

  useEffect(() => {
    const uncover = gsap
      .timeline({ defaults: { ease: "none" } })
      .from(footerContainer, { yPercent: -50 });

    ScrollTrigger.create({
      trigger: footerContainer,
      scroller: "#___gatsby",
      animation: uncover,
      start: "top+=25% bottom",
      end: "bottom+=55% bottom",
      scrub: true,
    });

    // for some reason this delay has to be here
    // or else it calculates the height wrong
    setTimeout(() => {
      ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 5000);
  }, []);

  return (
    <FooterWrapper>
      <Container ref={el => (footerContainer = el)}>
        <GridContainer>
          <Col>
            <ColContainer logo>
              <Icon name="logo" />
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <TogglerWrapper>
                    <label>
                      <input
                        type="checkbox"
                        onChange={ev => {
                          toggleTheme(ev.target.checked ? "dark" : "light");
                        }}
                        checked={theme === "dark"}
                      />
                      {theme === "dark" ? <Icon name="sun" /> : <Icon name="moon" />}
                    </label>
                  </TogglerWrapper>
                )}
              </ThemeToggler>
            </ColContainer>
            <FooterText>{data.footer.small_text}</FooterText>
          </Col>
        </GridContainer>
        <LinkContainer social>
          <ColContainer social>
            <SocialCol>
              <LabelText>Contact us</LabelText>
              <a href="mailto:team@techcodes.org">team@techcodes.org</a>
            </SocialCol>
            <SocialCol>
              <LabelText>Socials</LabelText>
              <Socials>
                <a href={SOCIALS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                  <Icon name="instagram" />
                </a>
                <a href={SOCIALS.LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Icon name="linkedin" />
                </a>
                <a href={SOCIALS.YOUTUBE} target="_blank" rel="noopener noreferrer">
                  <Icon name="youtube" />
                </a>
                <a href={SOCIALS.GITHUB} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" />
                </a>
                <a href={SOCIALS.TWITTER} target="_blank" rel="noopener noreferrer">
                  <Icon name="twitter" />
                </a>
              </Socials>
            </SocialCol>
          </ColContainer>
          <CreditWrapper>
            <CreditsLink>
              Crafted by{" "}
              <a href="https://outerlabs.studio" target="_blank" rel="noopener noreferrer">
                Outer Labs
              </a>
            </CreditsLink>
          </CreditWrapper>
        </LinkContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
