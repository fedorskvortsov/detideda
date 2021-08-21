import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "components/layout";
import Seo from "components/seo";
import { Card, Col, Container, Row } from "react-bootstrap";

import { teamLink } from "./index.module.css";

const Team = ({ data }) => {
  const { allMdx } = data;

  return (
    <Layout>
      <Seo title="Состав" />
      <div className="large-padding text-center">
        <h1 className="page-title display-4">Состав группы</h1>
        <p className="lead">Мастера своего дела!</p>
      </div>
      <Container>
        <Row className="g-3">
          {allMdx.nodes.map(
            ({
              id,
              slug,
              frontmatter: { name, role, person_image, person_image_alt },
            }) => {
              const image = getImage(person_image);

              return (
                <Col key={id} md={4}>
                  <Link className={teamLink} to={`/team/${slug}`}>
                    <Card>
                      <GatsbyImage
                        className="card-img-top"
                        image={image}
                        alt={person_image_alt}
                      />
                      <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-muted">{role}</Card.Text>
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

export default Team;

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/team/" } }) {
      nodes {
        frontmatter {
          name
          role
          person_image_alt
          person_image {
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
