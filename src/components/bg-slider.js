import React from "react"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundSlider from "gatsby-image-background-slider"

const BgSlider = ({ children }) => (
  <BackgroundSlider
    query={useStaticQuery(graphql`
      query {
        backgrounds: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 4000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)}
    initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
    transition={4} // transition duration between images
    duration={8} // how long an image is shown
    // specify images to include (and their order) according to `relativePath`
    images={["1.jpg", "2.jpg"]}
    // pass down standard element props
    style={{
      transform: "rotate(0deg) scale(1)",
    }}
  >
    {children}
  </BackgroundSlider>
)

const StyledBgSlider = styled(BgSlider)`
  width: 100%;
  heigth: 100vh;
  background-position: center center;

  background-size: cover;
  background-attachment: fixed;
`

export default StyledBgSlider
