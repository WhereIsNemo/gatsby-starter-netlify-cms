const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require(`./gatsby-actions/createPaginatedPages`);
const slugify = require('transliteration').slugify

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: slugify(value, {
        ignore: ['/'],
      }),
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

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
    }
  `).then(result => {
    // Output errors if they are
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // Create content pages
    const content = result.data.allMarkdownRemark.edges

    content.forEach(edge => {
      const id = edge.node.id

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
        })
      }
    })

    // Create category pages with pagination
    const categories = content.filter(edge => edge.node.frontmatter.contentType === "category");

    categories.forEach(category => {
      const categoryId = category.node.id;
      const categoryName = category.node.frontmatter.title;
      const categoryContent = content.filter(edge => edge.node.frontmatter.categories === categoryName);

      createPaginatedPages({
        createPage,
        nodes: categoryContent,
        contentType: "categories",
        templateName: "category-page",
        pageId: categoryId,
        contentName: categoryName,
      });
    })
  })
}
