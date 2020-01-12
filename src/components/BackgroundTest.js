import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/bg-rocky/" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h2>
            Bacon ipsum dolor amet tri-tip tongue capicola beef ribs cupim jerky
            short ribs burgdoggen. Meatball flank tenderloin salami cupim pork.
            Drumstick strip steak pancetta flank sausage burgdoggen rump t-bone
            tri-tip pork belly. Pig chicken turducken, rump kielbasa brisket
            tenderloin jerky pancetta frankfurter hamburger spare ribs. Pancetta
            biltong chislic tri-tip tongue. Tongue sausage corned beef spare
            ribs sirloin ribeye brisket picanha alcatra chicken pork belly
            salami.
          </h2>
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
