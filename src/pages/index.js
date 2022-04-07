import React from "react";
import { graphql } from "gatsby";
import { About, Hero, Team, Gallery, FAQ, Sponsors } from "@views";

const HomePage = ({ data }) => {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      {/* <Team /> */}
      {/* <Team /> */}
      <Gallery data={data} />
      <FAQ />
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    gallery1: file(relativePath: { eq: "gallery/1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    gallery2: file(relativePath: { eq: "gallery/2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    gallery3: file(relativePath: { eq: "gallery/3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    gallery4: file(relativePath: { eq: "gallery/4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    gallery5: file(relativePath: { eq: "gallery/5.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    gallery6: file(relativePath: { eq: "gallery/6.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    gallery7: file(relativePath: { eq: "gallery/7.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
    gallery8: file(relativePath: { eq: "gallery/8.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
    }
  }
`;
