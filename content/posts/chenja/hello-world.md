---
title: Hello World
date: '2019-05-25'
published: true
layout: post
tags: ['참고사이트']
category: example
---

Hello, this is an exciting post with three main points:

1. You can format your content using *markdown*
2. You can refer to images
3. You can include syntax highlighted code

![](https://i.ibb.co/dgFnpRt/image.png)


```js
console.log(`Hello world, 1 + 1 = ${1 + 1}`);
``` 
gatsby-example-using-remark
Using Excerpts
1 min read · tagged remark, excerpts

Contents
gatsby-transformer-remark allows you to get an excerpt from a markdown post. By default, it will prune the first 140 characters, but you can optionally specify a pruneLength in the graphql query.

{
  allMarkdownRemark {
    edges {
      node {
        excerpt(pruneLength: 280)
      }
    }
  }
}
You can also manually mark in your markdown where to stop excerpting—similar to Jekyll. gatsby-transformer-remark uses gray-matter to parse markdown frontmatter, so you can specify an excerpt_separator, as well as any of the other options mentioned here, in the gatsby-config.js file.

{
  "resolve": `gatsby-transformer-remark`,
  "options": {
    "excerpt_separator": `<!-- end -->`
  }
}
Any file that does not have the given excerpt_separator will fall back to the default pruning method.

You can see the results here

###  [style-componemts- 공부할것](https://spriteye.me/posts/2019/09/gatsby-layout/)