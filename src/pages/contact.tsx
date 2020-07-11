import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../layouts"
import SEO from "../components/Seo"
import Icon from "../components/Icon"
import { Wrapper, Grid, Cols } from "../styles"

const ContactPage: React.FC = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
    <Wrapper>
      <section>
        <Cols isReverse>
          <div>
            <h1>Let’s Work Together</h1>
            {/* <h2>
              Have a project in mind? Need help bringing it to the world? We’d
              love to hear from you.
            </h2> */}
          </div>
          <div>
            <h4 className="small-title">For design inquiries</h4>
            <p>
              <a
                href="mailto:iam@flyinghomestudio.com"
                style={{ fontSize: "var(--heading-two)" }}
              >
                iam@flyinghomestudio.com
              </a>
            </p>
            <div>
              <p className="large">
                <Icon name="phone" style={{ marginRight: "1rem" }} />+
                088-694-4946
              </p>
              <p className="large">
                <Icon name="line" style={{ marginRight: "1rem" }} />+
                088-694-4946
              </p>
            </div>
            <p className="large">
              87 Chalermpong, Saimai
              <br /> Bangkok 10220
              <br /> Thailand
            </p>
          </div>
        </Cols>
      </section>
    </Wrapper>
  </Layout>
)

export default ContactPage

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/yutaro-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
