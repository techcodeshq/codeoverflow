import React, { useEffect, useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Head, Nav, SmoothScroll } from "@components";
import { GlobalStyle } from "@styles";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const Layout = ({ children, location }) => {
  let mainContainer = useRef(null);

  // we need to do this or else there is a small flash before the content loads
  useEffect(() => {
    gsap.to(mainContainer, { opacity: 1, duration: 0.3 });
  }, []);

  // we need to do this because for some reason it calculates the wrong height
  // initially (probably because of the dynamic height of the FAQ section)
  setTimeout(() => {
    if (window !== "undefined") {
      window.scroll.scroll.update();
    }
  }, 2000);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => {
        return (
          <>
            <Head metadata={site.site.siteMetadata} />
            <SmoothScroll callbacks={location} />

            <GlobalStyle />
            <div id="___sticky" ref={el => (mainContainer = el)}>
              {location.pathname === "/" && <Nav location={location} />}
              <main>{children}</main>
            </div>
          </>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
