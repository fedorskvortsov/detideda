import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import "./index.scss";

const IndexPage = ({ data }) => {
  const { allMdx } = data;

  return (
    <Layout>
      <Seo title="Рок-группа" />
      <div className="large-padding text-center">
        <h1 className="page-title display-4">D e t i D e d a</h1>
        <p className="lead">
          Рок-группа <strong>DetiDeda</strong> &mdash; это авторские песни,
          уютная атмосфера и глубокая философия!
        </p>
      </div>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/about/">Go to About page</Link>
      </p>
      {allMdx.nodes.map(({ id, slug, frontmatter: { name, role } }) => (
        <article key={id}>
          <h2>
            <Link to={`/team/${slug}`}>{name}</Link>
          </h2>
          <p>{role}</p>
        </article>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/team/" } }) {
      nodes {
        frontmatter {
          name
          role
        }
        id
        slug
      }
    }
  }
`;
