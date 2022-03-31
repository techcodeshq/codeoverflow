import React, { useEffect, useRef } from "react";
import { Container, NormalText, TitleText, BigText } from "@styles";
import {
  SectionWrapper,
  ContainerWrapper,
  DescriptionWrapper,
  TransitionWrapper,
  RectWrap,
  ScheduleWrapper,
  AboutWrapper,
  InnerCard,
  OverflowWrapper,
} from "./style";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let rectWraps = useRef([]);
  let textWraps = useRef([]);
  let scrollContainer = useRef(null);
  let aboutText = useRef(null);
  let scheduleText = useRef(null);
  let scheduleRectText = useRef([]);

  useEffect(() => {
    const br = gsap
      .timeline({ defaults: { ease: "linear" } })
      .set(scheduleText, { display: "none" });

    scheduleRectText.current.forEach(element => {
      br.set(element, { display: "none" }, 0);
    });
    rectWraps.current.forEach((element, index) => {
      if (index > 4 && index < 11) {
        br.set(element, { display: "none" }, 0);
      }
    });

    br.from(rectWraps.current, { xPercent: 100, stagger: 0.1 }, 0);

    br.fromTo(
      rectWraps.current[0],
      { background: "linear-gradient(90deg, #E8E7FF 0%, #BDD5EA 100%)" },
      { background: `linear-gradient(90deg, #BDD5EA) 0%, #F7F7FF 100%)` },
      1,
    )
      .to(
        rectWraps.current[0],
        {
          background: `linear-gradient(90deg, #F7F7FF 0%, #FE5F55 100%)`,
        },
        1.5,
      )
      .to(
        rectWraps.current[0],
        {
          background: `linear-gradient(90deg, #FE5F55 0%, #FFBE0B 100%)`,
        },
        2,
      )
      .to(
        rectWraps.current[0],
        {
          background: `linear-gradient(90deg, #FFBE0B 0%, #5041FF 100%)`,
        },
        2.5,
      )
      .to(
        rectWraps.current[0],
        {
          background: `linear-gradient(90deg, #5041FF 0%, #5041FF 100%)`,
        },
        3,
      );

    br.fromTo(
      rectWraps.current[1],
      { background: "linear-gradient(90deg, #E1DBFF 0%, #16BAC5 100%)" },
      { background: `linear-gradient(90deg, #16BAC5 0%, #5FBFF9 100%)` },
      1,
    )
      .to(
        rectWraps.current[1],
        { background: `linear-gradient(90deg, #5FBFF9 0%, #EFE9F4 100%)` },
        1.5,
      )
      .to(
        rectWraps.current[1],
        { background: `linear-gradient(90deg, #EFE9F4 0%, #5863F8 100%)` },
        2,
      )
      .to(
        rectWraps.current[1],
        { background: `linear-gradient(90deg, #5863F8 0%, #242038 100%)` },
        2.5,
      )
      .to(
        rectWraps.current[1],
        {
          background: `linear-gradient(90deg, #242038 0%, #242038 100%)`,
        },
        3,
      );

    br.fromTo(
      rectWraps.current[2],
      { background: "linear-gradient(90deg, #A3FFFE 0%, #00BFB2 100%)" },
      { background: `linear-gradient(90deg, #00BFB2 0%, #F0F3BD 100%)` },
      1,
    )
      .to(
        rectWraps.current[2],
        { background: `linear-gradient(90deg, #F0F3BD 0%, #C64191 100%)` },
        1.5,
      )
      .to(
        rectWraps.current[2],
        { background: `linear-gradient(90deg, #C64191 0%, #554348 100%)` },
        2,
      )
      .to(
        rectWraps.current[2],
        { background: `linear-gradient(90deg, #554348 0%, #08605F 100%)` },
        2.5,
      )
      .to(
        rectWraps.current[2],
        {
          background: `linear-gradient(90deg, #08605F 0%, #08605F 100%)`,
        },
        3,
      );

    br.fromTo(
      rectWraps.current[3],
      { background: "linear-gradient(90deg, #F2B9C3 0%, #08415C 100%)" },
      { background: `linear-gradient(90deg, #08415C 0%, #6B818C 100%)` },
      1,
    )
      .to(
        rectWraps.current[3],
        { background: `linear-gradient(90deg, #6B818C 0%, #F1BF98 100%)` },
        1.5,
      )
      .to(
        rectWraps.current[3],
        { background: `linear-gradient(90deg, #F1BF98 0%, #EEE5E9 100%)` },
        2,
      )
      .to(
        rectWraps.current[3],
        { background: `linear-gradient(90deg, #EEE5E9 0%, #A4243B 100%)` },
        2.5,
      )
      .to(
        rectWraps.current[3],
        {
          background: `linear-gradient(90deg, #A4243B 0%, #A4243B 100%)`,
        },
        3,
      );

    br.fromTo(
      rectWraps.current[4],
      { background: "linear-gradient(90deg, #CCBFF0 0%, #ED254E 100%)" },
      { background: `linear-gradient(90deg, #ED254E 0%, #F9DC5C 100%)` },
      1,
    )
      .to(
        rectWraps.current[4],
        { background: `linear-gradient(90deg, #F9DC5C 0%, #F4FFFD 100%)` },
        1.5,
      )
      .to(
        rectWraps.current[4],
        { background: `linear-gradient(90deg, #F4FFFD 0%, #011936 100%)` },
        2,
      )
      .to(
        rectWraps.current[4],
        { background: `linear-gradient(90deg, #011936 0%, #7852E2 100%)` },
        2.5,
      )
      .to(
        rectWraps.current[4],
        {
          background: `linear-gradient(90deg, #7852E2 0%, #7852E2 100%)`,
        },
        3,
      );

    br.to(textWraps.current, { yPercent: 100, stagger: 0.15 }, 3.5);

    br.to(rectWraps.current, { width: "88%", borderRadius: 75 }, 4.7)
      .to(rectWraps.current[0], { yPercent: 192 }, 4.6)
      .to(rectWraps.current[1], { yPercent: 150 }, 4.5)
      .to(rectWraps.current[2], { yPercent: 109 }, 4.4)
      .to(rectWraps.current[3], { yPercent: 67 }, 4.3)
      .to(rectWraps.current[4], { yPercent: 28 }, 4.2)
      .to(rectWraps.current[5], { yPercent: 142 }, 4.7)
      .to(rectWraps.current[6], { yPercent: 144 }, 4.7)
      .to(rectWraps.current[7], { yPercent: 146 }, 4.7)
      .to(rectWraps.current[8], { yPercent: 148 }, 4.7)
      .to(rectWraps.current[9], { yPercent: 150 }, 4.7)
      .to(rectWraps.current[10], { yPercent: 152 }, 4.7);

    rectWraps.current.forEach((element, index) => {
      if (index > 4 && index < 11) {
        br.set(element, { yPercent: 160, display: "flex" }, 4.6);
      }
    });

    br.set(aboutText, { display: "none" }, 3).set(scheduleText, { display: "block" }, 3);
    textWraps.current.forEach(element => {
      br.set(element, { display: "none" }, 4.5);
    });
    scheduleRectText.current.forEach(element => {
      br.set(element, { display: "flex" }, 5.5);
    });
    scheduleRectText.current.forEach(element => {
      br.set(
        element.parentElement,
        {
          position: "absolute",
          top: "50%",
          height: "100%",
          transform: "translateY(-50%)",
          padding: "3vw 0",
        },
        5.5,
      );
    });
    br.to(rectWraps.current, { height: "32vw" }, 4);
    br.to(rectWraps.current, { transform: "none", top: "38%", stagger: 1 }, 6);

    ScrollTrigger.create({
      trigger: scrollContainer,
      scroller: "#___gatsby",
      animation: br,
      scrub: true,
      end: "+=15000",
      pin: true,
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <SectionWrapper ref={el => (scrollContainer = el)}>
        <TransitionWrapper>
          <RectWrap ref={el => (rectWraps.current[0] = el)}>
            <Container>
              <OverflowWrapper>
                <BigText ref={el => (textWraps.current[0] = el)}>Compete for 24 hours</BigText>
                <InnerCard ref={el => (scheduleRectText.current[0] = el)}>
                  <div>
                    <NormalText>Day 1</NormalText>
                    <BigText>9:00AM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Doors open</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[1] = el)}>
            <Container>
              <OverflowWrapper>
                <BigText ref={el => (textWraps.current[1] = el)}>Make lasting friends</BigText>
                <InnerCard ref={el => (scheduleRectText.current[1] = el)}>
                  <div>
                    <NormalText>Day 1</NormalText>
                    <BigText>10:00AM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Opening ceremony</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[2] = el)}>
            <Container>
              <OverflowWrapper>
                <BigText ref={el => (textWraps.current[2] = el)}>Win tons of prizes</BigText>
                <InnerCard ref={el => (scheduleRectText.current[2] = el)}>
                  <div>
                    <NormalText>Day 1</NormalText>
                    <BigText>12:00PM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>WebDev & Game Dev Workshop</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[3] = el)}>
            <Container>
              <OverflowWrapper>
                <BigText ref={el => (textWraps.current[3] = el)}>Land an internship</BigText>
                <InnerCard ref={el => (scheduleRectText.current[3] = el)}>
                  <div>
                    <NormalText>Day 1</NormalText>
                    <BigText>2:00PM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Lunch</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[4] = el)}>
            <Container>
              <OverflowWrapper>
                <BigText ref={el => (textWraps.current[4] = el)}>
                  Put your coding skills to use
                </BigText>
                <InnerCard ref={el => (scheduleRectText.current[4] = el)}>
                  <div>
                    <NormalText>Day 1</NormalText>
                    <BigText>3:00PM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Speaker #1 & #2</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[5] = el)}>
            <Container>
              <OverflowWrapper>
                <InnerCard ref={el => (scheduleRectText.current[5] = el)}>
                  <div>
                    <NormalText>Day 1</NormalText>
                    <BigText>7:00PM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Dinner</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[6] = el)}>
            <Container>
              <OverflowWrapper>
                <InnerCard ref={el => (scheduleRectText.current[6] = el)}>
                  <div>
                    <NormalText>Day 1</NormalText>
                    <BigText>8:00PM-12:00AM </BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Movie Night + Midnight Snack</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[7] = el)}>
            <Container>
              <OverflowWrapper>
                <InnerCard ref={el => (scheduleRectText.current[7] = el)}>
                  <div>
                    <NormalText>Day 2</NormalText>
                    <BigText>7:30AM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Breakfast</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[8] = el)}>
            <Container>
              <OverflowWrapper>
                <InnerCard ref={el => (scheduleRectText.current[8] = el)}>
                  <div>
                    <NormalText>Day 2</NormalText>
                    <BigText>10:00AM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Judging Begins</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[9] = el)}>
            <Container>
              <OverflowWrapper>
                <InnerCard ref={el => (scheduleRectText.current[9] = el)}>
                  <div>
                    <NormalText>Day 2</NormalText>
                    <BigText>12:00PM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Lunch</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
          <RectWrap ref={el => (rectWraps.current[10] = el)}>
            <Container>
              <OverflowWrapper>
                <InnerCard ref={el => (scheduleRectText.current[10] = el)}>
                  <div>
                    <NormalText>Day 2</NormalText>
                    <BigText>2:00PM</BigText>
                  </div>
                  <div>
                    <TitleText style={{ margin: 0 }}>Closing & Award Ceremony</TitleText>
                  </div>
                </InnerCard>
              </OverflowWrapper>
            </Container>
          </RectWrap>
        </TransitionWrapper>
        <Container ref={el => (scheduleText = el)}>
          <ScheduleWrapper>
            <TitleText>Schedule</TitleText>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </NormalText>
          </ScheduleWrapper>
        </Container>
        <Container ref={el => (aboutText = el)}>
          <AboutWrapper>
            <ContainerWrapper>
              <TitleText>The BIGGEST highschool-led hackathon in New York.</TitleText>
            </ContainerWrapper>
            <DescriptionWrapper>
              <NormalText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </NormalText>
            </DescriptionWrapper>
          </AboutWrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default About;
