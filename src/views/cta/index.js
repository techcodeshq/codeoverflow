import React from "react";
import { TitleText } from "@styles";
import { PillWrapper, TextWrapper } from "./style";
import { Button } from "@components";

const CTA = () => {
  return (
    <PillWrapper>
      <TextWrapper>
        <TitleText>Hack. Laugh. Create. Inspire. Change the world.</TitleText>
      </TextWrapper>
      <Button href="https://code.techcodes.org/signup">Sign up now</Button>
    </PillWrapper>
  );
};

export default CTA;
