import React, { useEffect, useRef } from "react";
import { Container } from "@styles";
import AllegroLogo from "@images/logo.png";
import {
  FooterWrapper,
  GridContainer,
  Logo,
  LeftCol,
  MiddleCol,
  RightColOne,
  RightColTwo,
  TitleText,
  StyledFrom,
  FormGroup,
  FormButton,
  ErrorCustom,
  FooterText,
  FooterLinkWrapper,
  ContactWrapper,
  BottomWrapper,
} from "./style";
import { MovingLink, OutsideMovingLink } from "@components";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import { Icon } from "@components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FormSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Email field is required"),
});

const Footer = () => {
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

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <FooterWrapper>
      <Container ref={el => (footerContainer = el)}>
        <GridContainer>
          <LeftCol>
            <Logo src={AllegroLogo} alt="Allegro Fencing Center" />
          </LeftCol>
          <MiddleCol>
            <TitleText>To train with the best,</TitleText>
            <TitleText>Play with the best</TitleText>
            <Formik initialValues={{ email: undefined }} validationSchema={FormSchema}>
              {({ isSubmitting, dirty, submitCount, status }) => (
                <StyledFrom>
                  <FormGroup>
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      autoComplete="username"
                    />
                    <ErrorMessage component={ErrorCustom} name="email" />
                  </FormGroup>
                  <FormButton type="submit" disabled={!dirty || isSubmitting || submitCount >= 5}>
                    <span />
                    <Icon name="arrow-right" />
                  </FormButton>
                </StyledFrom>
              )}
            </Formik>
          </MiddleCol>
          <RightColOne>
            <div>
              <FooterText>Menu</FooterText>
              <FooterLinkWrapper>
                <MovingLink to="/about" text="About us" />
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <MovingLink to="/programs" text="Programs" />
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <MovingLink to="/news" text="News" />
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <MovingLink to="/contact" text="Contact us" />
              </FooterLinkWrapper>
            </div>
            <div>
              <FooterText spaced>Legal</FooterText>
              <FooterLinkWrapper>
                <MovingLink to="/privacy" text="Privacy Policy" />
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <MovingLink to="/terms" text="Terms of Service" />
              </FooterLinkWrapper>
            </div>
          </RightColOne>
          <RightColTwo>
            <FooterText noMargin>101-32 Dupont Street</FooterText>
            <FooterText noMargin>Plainview, NY 11803</FooterText>

            <ContactWrapper>
              <FooterLinkWrapper>
                <OutsideMovingLink href="tel:+18008888888" text="(800) 888-8888" />
              </FooterLinkWrapper>
              <FooterLinkWrapper>
                <OutsideMovingLink
                  href="mailto:info@allegrofencing.com"
                  text="info@allegrofencing.com"
                />
              </FooterLinkWrapper>
            </ContactWrapper>
          </RightColTwo>
        </GridContainer>
        <BottomWrapper>
          <FooterText>&copy;2022 Allegro Fencing Center</FooterText>
          <FooterText>
            <a href="https://outerlabs.studio" target="_blank" rel="noopener noreferrer">
              Crafted by Outer Labs
            </a>
          </FooterText>
        </BottomWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
