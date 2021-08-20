import * as React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";

const Person = ({ data }) => {
  const { name, role } = data.mdx.frontmatter;
  return (
    <Layout>
      <h2>{name}</h2>
      <p>{role}</p>
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
    }
  }
`;

export default Person;
