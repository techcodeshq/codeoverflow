import styled from "styled-components";
import { media } from "@styles";

export const FAQSection = styled.section`
  background-color: var(--accent);
  padding: 10vw 0;
`;
export const SplitWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 2vw;

  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 6vw;
  `};

  h1 {
    margin: 0;
  }
`;
export const AccordionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--secondary);
  border-radius: 22px;
  padding: 0 1.5vw;
  ${media.thone`padding: 0 2vw;`};

  p {
    font-weight: 600;
  }

  :not(:first-child) {
    margin-top: 1vw;
    
    ${media.thone`margin-top: 3vw;`};
  }
`;
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 1vw;

  span {
    width: 16px;
    height: 4px;
    background: var(--text);
    transition: all 0.1s ease-in-out;
  }
`;
export const AccordionContent = styled.div`
  overflow: hidden;
  background-color: var(--secondary);
  border-radius: 32px;
  margin-top: 1vw;

  p {
    margin: 2vw;
    ${media.thone`margin: 6vw;`};
  }
`;
