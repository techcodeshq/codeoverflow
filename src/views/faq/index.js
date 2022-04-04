import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container, NormalText, TitleText } from "@styles";
import {
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  FAQSection,
  SplitWrapper,
} from "./style";

const questions = [
  {
    id: 0,
    question: "Am I required to stay overnight?",
    answer:
      "You are not required to stay overnight! Participants are free to go home for the night and return on the next day. If you do choose to stay overnight, please plan accordingly and bring necessary equipment!",
  },
  {
    id: 1,
    question: "What should I bring?",
    answer:
      "Bring your laptop, phone, chargers, and anything else you may need.If you are staying overnight, be sure to bring a sleeping bag.",
  },
  {
    id: 2,
    question: "Do you need to know how to code?",
    answer:
      "Nope! Everyone is welcome. It doesn't matter if you're just getting started with programming or have years of experience. Our volunteers, mentors, and workshops will teach you everything that you need to know.",
  },
  {
    id: 3,
    question: "What if I don’t have a team?",
    answer:
      "No problem, you’re not the only one! Team formations will occur after the opening ceremony where you will have the opportunity to meet new students. We recommend participants to form teams of up to 4 students.",
  },
];

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);
  let arrowSticks = useRef([]);
  let content = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (window !== "undefined") {
        window.scroll.scroll.update();
      }
    } else {
      if (window !== "undefined") {
        window.scroll.scroll.update();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    gsap.to(arrowSticks.current[0], { x: 3 });
    gsap.to(arrowSticks.current[1], { x: -3 });

    if (isOpen || hovered) {
      gsap.to(arrowSticks.current, { rotate: 0, duration: 0.2 });
    } else {
      gsap.to(arrowSticks.current[0], { rotate: 45, duration: 0.2 });
      gsap.to(arrowSticks.current[1], { rotate: -45, duration: 0.2 });
    }
  }, [hovered, isOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(content, {
        height: "auto",
        duration: 0.8,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(content, {
        height: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}>
        <AccordionIcon>
          <span ref={el => (arrowSticks.current[0] = el)} />
          <span ref={el => (arrowSticks.current[1] = el)} />
        </AccordionIcon>
        <NormalText>{details.question}</NormalText>
      </AccordionHeader>
      <AccordionContent key="content" ref={el => (content = el)}>
        <NormalText>{details.answer}</NormalText>
      </AccordionContent>
    </>
  );
};

const FAQ = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <FAQSection id="faq">
      <Container>
        <SplitWrapper>
          <div>
            <TitleText>Frequently asked questions</TitleText>
          </div>
          <div>
            {questions.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        </SplitWrapper>
      </Container>
    </FAQSection>
  );
};

export default FAQ;
