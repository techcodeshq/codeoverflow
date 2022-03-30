import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";
import {
  CompWrapper,
  MarqueeInner,
  MarqueeWrapper,
  ClippedText,
  Line,
  CardWrap,
  Card,
  DescriptionWrapper,
  OverflowWrapper,
} from "./style";
import { Icon } from "@components";
import { DisplayText, NormalText } from "@styles";

const Hero = () => {
  let clippedText = useRef([]);
  let marqueeInner = useRef(null);
  let titleAnim = useRef([]);
  let cardAnim = useRef([]);
  let tl = gsap.timeline();
  let descriptionAnim = useRef(null);

  useEffect(() => {
    let tween = gsap
      .to(clippedText.current, { xPercent: -100, repeat: -1, duration: 5, ease: "linear" })
      .totalProgress(0.5);

    gsap.set(marqueeInner, { xPercent: -50 });
    if (window !== "undefined") {
      window.scroll.on("scroll", func => {
        let isScrollingDown = func.direction === "up" ? false : true;
        gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });
      });
    }
  }, []);

  useEffect(() => {
    tl.from(titleAnim.current, {
      yPercent: -100,
      stagger: 0.2,
      ease: Power4.easeOut,
      duration: 1.5,
    })
      .from(cardAnim.current, { scale: 0, stagger: 0.1, ease: Power4.easeOut, duration: 1 }, "-=1")
      .from(descriptionAnim, { opacity: 0, ease: Power4.easeOut, duration: 1 }, "-=1");
  }, []);

  return (
    <CompWrapper>
      <MarqueeWrapper>
        <OverflowWrapper>
          <Line ref={el => (titleAnim.current[0] = el)}>
            <DisplayText>Code</DisplayText>
          </Line>
        </OverflowWrapper>
        <OverflowWrapper>
          <Line ref={el => (titleAnim.current[1] = el)}>
            <MarqueeInner ref={el => (marqueeInner = el)}>
              <ClippedText ref={el => (clippedText.current[0] = el)}>
                Overflow&nbsp;&nbsp;
              </ClippedText>
              <ClippedText ref={el => (clippedText.current[1] = el)}>
                Overflow&nbsp;&nbsp;
              </ClippedText>
              <ClippedText ref={el => (clippedText.current[2] = el)}>
                Overflow&nbsp;&nbsp;
              </ClippedText>
              <ClippedText ref={el => (clippedText.current[3] = el)}>
                Overflow&nbsp;&nbsp;
              </ClippedText>
              <ClippedText ref={el => (clippedText.current[4] = el)}>
                Overflow&nbsp;&nbsp;
              </ClippedText>
              <ClippedText ref={el => (clippedText.current[5] = el)}>
                Overflow&nbsp;&nbsp;
              </ClippedText>
            </MarqueeInner>
          </Line>
        </OverflowWrapper>
        <OverflowWrapper>
          <Line ref={el => (titleAnim.current[2] = el)}>
            <DisplayText>2022</DisplayText>
          </Line>
        </OverflowWrapper>
      </MarqueeWrapper>
      <CardWrap>
        <Card ref={el => (cardAnim.current[0] = el)}>
          <Icon name="calendar" />
          <NormalText>April 16th-17th</NormalText>
        </Card>
        <Card ref={el => (cardAnim.current[1] = el)}>
          <Icon name="pin" />
          <NormalText>Brooklyn, NY</NormalText>
        </Card>
        <Card ref={el => (cardAnim.current[2] = el)}>
          <Icon name="dollar" />
          <NormalText>$0 Admission</NormalText>
        </Card>
      </CardWrap>
      <DescriptionWrapper ref={el => (descriptionAnim = el)}>
        <NormalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </NormalText>
      </DescriptionWrapper>
    </CompWrapper>
  );
};

export default Hero;
