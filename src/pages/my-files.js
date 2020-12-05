import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
                {data.allFile.edges.map (({node}, index) => (
                    <div key={index}>
                        <div>패스: {node.relativePath}</div>
                        <div>사이즈: {node.prettySize}</div>
                        <div>확장명: {node.extension}</div>
                        <div>시간: {node.birthTime}</div>
                    </div>
                ))}
            </div>
            
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                     birthTime(fromNow: true)
                }
            }
        }
    }
`