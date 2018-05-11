const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require(`./gatsby/createPaginatedPages`);
const slugify = require('transliteration').slugify;

const generateBabelConfig = require("gatsby/dist/utils/babel-config");

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ["> 0.5%", "last 2 versions", "IE >= 11"],
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader("js").loader("js", {
      test: /\.jsx?$/,
      exclude: /node_modules\/(?!@glidejs)/,
      loader: "babel",
      query: babelConfig,
    });
  });
};

exports.onCreateNode = ({ node, getNode, getNodes, boundActionCreators }) => {
  const { createNodeField, createParentChildLink } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: slugify(value, {
        ignore: ['/'],
      }),
    });

    if (typeof node.frontmatter.image === 'string') {
      const pathToFile = path
        .join(__dirname, 'static', node.frontmatter.image)
        .split(path.sep)
        .join('/');

      const fileNode = getNodes().find(n => {
        if (n.internal.type === 'File') {
          return n.absolutePath.endsWith(node.frontmatter.image);
        }
      });

      if (fileNode) {
        // Find ImageSharp node corresponding to the File node
        const imageSharpNodeId = fileNode.children.find(n => n.endsWith('>> ImageSharp'));
        const imageSharpNode = getNodes().find(n => n.id === imageSharpNodeId);

        // Add ImageSharp node as child
        createParentChildLink({ parent: node, child: imageSharpNode });
      }
    }
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              categories
              contentType
              image
            }
          }
        }
      }
      categories: allMarkdownRemark(
        filter: { frontmatter: { contentType: { eq: "category" } } }
        sort: {fields: [frontmatter___title], order: ASC},
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      productsPreviews: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "product-page" } } }
        sort: {fields: [frontmatter___title], order: ASC},
      ) {
        edges {
          node {
            childrenImageSharp {
              resolutions(width: 255, quality: 85) {
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            fields {
              slug
            }
            frontmatter {
              title
              categories
              price
            }
          }
        }
      }
    }
  `).then(result => {
      // Output errors if they are
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      // Create content pages
      const content = result.data.allMarkdownRemark.edges;

      content.forEach(edge => {
        const id = edge.node.id;

        if (edge.node.frontmatter.templateKey) {
          createPage({
            path: slugify(edge.node.fields.slug, {
              ignore: ['/'],
            }),
            component: path.resolve(
              `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
            ),
            // additional data can be passed via context
            context: {
              id,
            },
          });
        }
      });

      // Create category pages with pagination
      const {
        categories,
        productsPreviews,
      } = result.data;

      categories.edges.forEach(category => {
        const categoryId = category.node.id;
        const categoryName = category.node.frontmatter.title;
        const categoryContent = productsPreviews.edges.filter(edge =>
          edge.node.frontmatter.categories === categoryName
        );

        createPaginatedPages({
          slug: category.node.fields.slug,
          createPage,
          nodes: categoryContent,
          contentType: 'categories',
          templateName: 'category-page',
          pageId: categoryId,
        });
      });
    });
};
