import React, { useRef, useEffect } from "react";
import { TitleText } from "@styles";
import { PillWrapper, SectionWrapper, TextWrapper } from "./style";
import { Button } from "@components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  let pillRef = useRef(null);
  let sectionWrapper = useRef(null);

  useEffect(() => {
    const uncover = gsap
      .timeline({ defaults: { ease: "none" } })
      .to(pillRef, { borderRadius: "845px" });

    ScrollTrigger.create({
      trigger: sectionWrapper,
      scroller: "#___gatsby",
      animation: uncover,
      start: "top+=40% center",
      end: "bottom+=30% center",
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
    <SectionWrapper ref={el => (sectionWrapper = el)}>
      <PillWrapper ref={el => (pillRef = el)}>
        <TextWrapper>
          <TitleText>Hack. Laugh. Create. Inspire. Change the world.</TitleText>
        </TextWrapper>
        <Button href="https://code.techcodes.org/signup">Sign up now</Button>
      </PillWrapper>
    </SectionWrapper>
  );
};

export default CTA;
