const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ifyaa/working/gatsby/tutorial-part-six/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/ifyaa/working/gatsby/tutorial-part-six/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ifyaa/working/gatsby/tutorial-part-six/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/home/ifyaa/working/gatsby/tutorial-part-six/src/pages/my-files.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/ifyaa/working/gatsby/tutorial-part-six/src/pages/tags.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/ifyaa/working/gatsby/tutorial-part-six/src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/ifyaa/working/gatsby/tutorial-part-six/src/templates/tags.js")))
}

