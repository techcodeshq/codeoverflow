import styled from "styled-components";
import { media } from "@styles";

export const SponsorWrapper = styled.section`
  background-color: var(--accent);
  padding: 2vw 0;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 6vw;

    img {
        width: 100% !important;
    }
  `};

  img {
    width: 9vw;
  }
`;
