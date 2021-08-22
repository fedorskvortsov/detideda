import * as React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Seo from "components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";

const Album = ({ data }) => {
  const {
    frontmatter: { title, year, album_image, album_image_alt },
    body,
  } = data.mdx;
  const image = getImage(album_image);
  // TODO: add album image
  return (
    <Layout>
      <Seo title={title} />
      <div class="large-padding text-center">
        <h1 class="page-title display-4">{title}</h1>
        <p class="lead">
          <b>Detideda</b> &ndash; это самые крутые песни!
        </p>
      </div>
      <Container fluid>
        <Row>
          <Col md>
            <GatsbyImage image={image} alt={album_image_alt} />
            <h2>{title}</h2>
            <p>{year}</p>
          </Col>
          <Col md>
            
          </Col>
        </Row>
      </Container>
      <Container>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        year
        album_image_alt
        album_image {
          childImageSharp {
            gatsbyImageData(
              transformOptions: { cropFocus: CENTER }
              height: 512
              width: 512
            )
          }
        }
      }
      body
    }
  }
`;

export default Album;
