import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ClippedText, MarqueeInner, MarqueeWrapper, SectionWrapper } from "./style";

const Line = ({ reverse }) => {
  let clippedText = useRef([]);
  let marqueeInner = useRef(null);

  useEffect(() => {
    let tween = gsap
      .to(clippedText.current, {
        xPercent: reverse ? 100 : -100,
        repeat: -1,
        duration: 7,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(marqueeInner, { xPercent: -50 });
    if (window !== "undefined") {
      window.scroll.on("scroll", func => {
        let isScrollingDown = func.direction === "up" ? false : true;
        gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });
      });
    }
  }, []);

  return (
    <MarqueeWrapper>
      <MarqueeInner ref={el => (marqueeInner = el)}>
        <ClippedText ref={el => (clippedText.current[0] = el)}>
          For students, by students.
        </ClippedText>
        <ClippedText ref={el => (clippedText.current[1] = el)}>
          For students, by students.
        </ClippedText>
        <ClippedText ref={el => (clippedText.current[2] = el)}>
          For students, by students.
        </ClippedText>
        <ClippedText ref={el => (clippedText.current[3] = el)}>
          For students, by students.
        </ClippedText>
      </MarqueeInner>
    </MarqueeWrapper>
  );
};

const Marquee = () => {
  return (
    <SectionWrapper>
      <Line />
      <Line reverse />
    </SectionWrapper>
  );
};

export default Marquee;
