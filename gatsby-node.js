const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages`})
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	  console.log(createFilePath({ node, getNode, basePath: `pages`}))
	}
  }
exports.createPages = ({ graphql, actions }) => {
	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
							
						}
						frontmatter {
					
							tags
						  }
					}
				}
			}
		}
	`).then(result => {
		console.log(JSON.stringify(result, null, 4))

		// const tagTemplate = path.resolve('./src/templates/tag.js')
		const posts = result.data.allMarkdownRemark.edges

		let tags = []
    		posts.forEach(post => {
      if (post.node.frontmatter.tags) {
        tags = tags.concat(post.node.frontmatter.tags)
      }
    })
    const uniqTags = [...new Set(tags)]

// 페이지는 완성이 안되었습니다. 
posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
	        const next = index === 0 ? null : posts[index - 1].node

    // Create tag pages
    uniqTags.forEach(tag => {
      if (!tag) return
      actions.createPage({
        path: `/tags/${tag}/`,
        component: path.resolve('./src/templates/tags.js'),
        context: {
          tag,
        },
      })
	})



	// 여기부터 포스트
	posts.forEach(({ node }) => {
		actions.createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				slug: node.fields.slug
			}
		})
	})
  })
})
}


// 여기는 tags먼저 만들고...나중에 post 하였습니다ㅣ