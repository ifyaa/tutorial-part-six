import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'



export default ({data}) => {
    console.log(data)

    return (
    <Layout>
        <div>
        <h1 css={css`display: inline-block; border-bottom: 1px solid;`}>Main page</h1>
            <h4>{data.allMarkdownRemark.totalCount}posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
        
 <Link to={node.fields.slug}> {/* 이거 한줄 넣었다... 링크시키는데... 필드에 슬러그 하고 */}
        <h3 css={css`margin-bottom: ${rhythm(1 /4)};`}>
            {node.frontmatter.title}{" "}
            <span css={css`color: #bbb;`}>
                -{node.frontmatter.date}
            </span>
        </h3>
        <p>{node.excerpt}</p>
        <p>
            {/* 여기가 tags코드   frontmatter아래에 tags넣고  그게다야.... 여기선...*/}
            {node.frontmatter.tags.map(tag => {
            return (
                <li>
                <Link to={`/tags/${tag}`}>
                    {tag}
                </Link>
                </li>
            )
            })}
        </p>
        </Link>
    </div>
))}
        </div>
    </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        tags
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`