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
  ResizeContainer,
  ComputerWrapper,
} from "./style";
import { Computer, Icon } from "@components";
import { DisplayText, NormalText } from "@styles";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let clippedText = useRef([]);
  let marqueeInner = useRef(null);
  let titleAnim = useRef([]);
  let cardAnim = useRef([]);
  let tl = gsap.timeline();
  let descriptionAnim = useRef(null);
  let scrollContainer = useRef(null);
  let resizeCon = useRef(null);
  let compCon = useRef(null);

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
    });
  }, []);

  useEffect(() => {
    const br = gsap.timeline({ defaults: { ease: "linear" } });

    br.set(resizeCon, { position: "absolute", bottom: "5vmin" }, 0)
      .from(resizeCon, { "--hero-resize": 0.7 }, 0)
      .to(compCon, { width: "160vw", bottom: "-65%" }, 0)
      .from(titleAnim.current[1], { width: "42vw" }, 0)
      .to(compCon, { autoAlpha: 0 }, 1)
      .from(cardAnim.current, { scale: 0, stagger: 0.1, ease: Power4.easeOut, duration: 1 }, 1)
      .from(descriptionAnim, { opacity: 0, ease: Power4.easeOut, duration: 1 }, 1);

    ScrollTrigger.create({
      trigger: scrollContainer,
      scroller: "#___gatsby",
      animation: br,
      scrub: true,
      end: "+=1000",
      pin: true,
      markers: true,
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <CompWrapper ref={el => (scrollContainer = el)}>
      <ComputerWrapper ref={el => (compCon = el)}>
        <Computer />
      </ComputerWrapper>
      <ResizeContainer ref={el => (resizeCon = el)}>
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
                <ClippedText ref={el => (clippedText.current[6] = el)}>
                  Overflow&nbsp;&nbsp;
                </ClippedText>
                <ClippedText ref={el => (clippedText.current[7] = el)}>
                  Overflow&nbsp;&nbsp;
                </ClippedText>
                <ClippedText ref={el => (clippedText.current[8] = el)}>
                  Overflow&nbsp;&nbsp;
                </ClippedText>
                <ClippedText ref={el => (clippedText.current[9] = el)}>
                  Overflow&nbsp;&nbsp;
                </ClippedText>
                <ClippedText ref={el => (clippedText.current[10] = el)}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </NormalText>
        </DescriptionWrapper>
      </ResizeContainer>
    </CompWrapper>
  );
};

export default Hero;
