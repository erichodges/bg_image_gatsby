import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';


// const media = generateMedia()

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "car.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <StyledWrapper>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
            classId="gbi"
            style={{
              position: "absolute",
              backgroundSize: "cover",
              backgroundPosition: "0% 50%",
              backgroundRepeat: "no-repeat", 
              minHeight: "100vh",
              width: "100vw"
            }}
          >
            {children}
          </BackgroundImage>
        </StyledWrapper>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  
`

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
  // This is an example how to target the pseudo-elements:
  //.gatsby-background-image-gbi:after, .gatsby-background-image-gbi:before {
  //  background-position: top right;
  //}
`

export default StyledBackgroundSection
