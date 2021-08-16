/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// eslint-disable-next-line no-undef, no-unused-vars
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // eslint-disable-next-line no-undef
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
