import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "components/layout";
import Seo from "components/seo";
import { Card, Col, Container, Row } from "react-bootstrap";

const Albums = ({ data }) => {
  const { allMdx } = data;

  return (
    <Layout>
      <Seo title="Альбомы" />
      <div className="large-padding text-center">
        <h1 className="page-title display-4">Альбомы</h1>
        <p className="lead">Самые крутые песни!</p>
      </div>
      <Container>
        <Row className="g-3">
          {allMdx.nodes.map(
            ({
              id,
              slug,
              frontmatter: { title, year, album_image, album_image_alt },
            }) => {
              const image = getImage(album_image);

              return (
                <Col key={id} md={4}>
                  <Link className="card-link" to={`/albums/${slug}`}>
                    <Card>
                      <GatsbyImage
                        className="card-img-top"
                        image={image}
                        alt={album_image_alt}
                      />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="text-muted">{year}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            }
          )}
        </Row>
      </Container>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Albums;

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/albums/" } }) {
      nodes {
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
        id
        slug
      }
    }
  }
`;
