
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/
const path = require(`path`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  //Setup Private Routes
  if (page.path === "/") {
    page.matchPath = "/*";
    createPage(page);
  }
};
