import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GridWrapper, ImageWrapper, SectionWrapper, TextWrapper } from "./style";
import { NormalText, Container } from "@styles";

const Gallery = ({ data }) => {
  return (
    <SectionWrapper>
      <Container>
        <TextWrapper>
          <NormalText>
            We have an expansive history of empowering students all around the nation through STEM
            opportunities.
          </NormalText>
        </TextWrapper>
      </Container>
      <GridWrapper data-scroll data-scroll-speed={-1} data-scroll-direction="horizontal">
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery5.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery6.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery7.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery8.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
      </GridWrapper>
      <GridWrapper data-scroll data-scroll-speed={1} data-scroll-direction="horizontal">
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery1.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery2.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery3.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={data.gallery4.childImageSharp.gatsbyImageData}
            alt="Tech Night 2018"
          />
        </ImageWrapper>
      </GridWrapper>
    </SectionWrapper>
  );
};

export default Gallery;
