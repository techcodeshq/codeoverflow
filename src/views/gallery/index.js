import React, { useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import {
  GallerySection,
  GridWrapper,
  ImageWrapper,
  RowsWrapper,
  ScaleWrapper,
  SectionWrapper,
  TextWrapper,
} from "./style";
import { NormalText, Container } from "@styles";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ data }) => {
  let sectionContainer = useRef(null);
  let scaleWrapper = useRef(null);
  let grids = useRef([]);

  useEffect(() => {
    const br = gsap.timeline({ defaults: { ease: "linear" } });

    br.fromTo(scaleWrapper, { scale: 2 }, { scale: 1 });

    ScrollTrigger.create({
      trigger: sectionContainer,
      scroller: "#___gatsby",
      animation: br,
      scrub: true,
      end: "+=1000",
      start: "bottom bottom",
      pin: true,
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const br = gsap.timeline({ defaults: { ease: "linear" } });

    br.fromTo(grids.current[0], { left: "-40%" }, { left: "0%" }, 0).fromTo(
      grids.current[1],
      { left: "-3%" },
      { left: "-40%" },
      0.4,
    );

    ScrollTrigger.create({
      trigger: sectionContainer,
      scroller: "#___gatsby",
      animation: br,
      scrub: true,
      end: "+=3000",
      start: "top top",
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <SectionWrapper ref={el => (sectionContainer = el)}>
      <Container>
        <TextWrapper>
          <NormalText>
            We have an expansive history of empowering students all around the nation through STEM
            opportunities.
          </NormalText>
        </TextWrapper>
      </Container>

      <GallerySection>
        <RowsWrapper>
          <ScaleWrapper ref={el => (scaleWrapper = el)}>
            <GridWrapper ref={el => (grids.current[0] = el)}>
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
            <GridWrapper ref={el => (grids.current[1] = el)}>
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
          </ScaleWrapper>
        </RowsWrapper>
      </GallerySection>
    </SectionWrapper>
  );
};

export default Gallery;
