import React from "react";

import DRWFoundation from "@images/sponsors/drw.svg";
import Linode from "@images/sponsors/linode.svg";
import StickerGiant from "@images/sponsors/sticker-giant.svg";
import StickerMule from "@images/sponsors/sticker-mule.svg";
import SunFoundation from "@images/sponsors/sun-foundation.svg";
import ThePrincetonReview from "@images/sponsors/the-princeton-review.svg";
import { LogoWrapper, SponsorWrapper } from "./style";
import { Container } from "@styles";

const Sponsors = () => {
  return (
    <SponsorWrapper>
      <Container>
        <LogoWrapper>
          <img src={DRWFoundation} alt="DRW" />
          <img src={Linode} alt="Linode" />
          <img src={StickerGiant} alt="Sticker Giant" />
          <img src={StickerMule} alt="Sticker Mule" />
          <img src={SunFoundation} alt="Sun Foundation" />
          <img src={ThePrincetonReview} alt="The Princeton Review" />
        </LogoWrapper>
      </Container>
    </SponsorWrapper>
  );
};

export default Sponsors;
