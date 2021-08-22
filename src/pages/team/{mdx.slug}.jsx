import * as React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Seo from "components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Person = ({ data }) => {
  const {
    frontmatter: { name, role },
    body,
  } = data.mdx;
  // TODO: add person image here
  return (
    <Layout>
      <Seo title={name} />
      <h2>{name}</h2>
      <p>{role}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        role
      }
      body
    }
  }
`;

export default Person;
