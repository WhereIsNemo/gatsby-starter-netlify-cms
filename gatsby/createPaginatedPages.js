const path = require(`path`);
const slugify = require('transliteration').slugify;

module.exports = ({
  slug,
  createPage,
  nodes,
  contentType,
  templateName,
  pageId,
  contentName,
  paginateSize = 9,
}) => {
  const template = path.resolve(`src/templates/${templateName}.js`);

  // Split posts into arrays of length equal to number posts on each page/paginateSize
  const groupedPages = nodes
    .map((node, index) => {
      return index % paginateSize === 0
        ? nodes.slice(index, index + paginateSize)
        : null;
    })
    .filter(item => item);

  // Create new indexed route for each array
  if (groupedPages.length === 0) {
    return createPage({
      path: slug,
      component: template,
      context: {
        id: pageId,
      },
    });
  } else {
    groupedPages.forEach((group, index, groups) => {
      const pageIndex = index === 0 ? `` : index + 1;

      return createPage({
        path: `${slug}/${pageIndex}`,
        component: template,
        context: {
          id: pageId,
          group,
          pagesCount: groups.length,
          index: index + 1,
          slug,
        },
      });
    });
  }
};
