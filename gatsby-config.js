module.exports = {
    siteMetadata: {
        title: `손가락`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            option: {
                pagyToConfigModule: `src/utils/typogarphy`,
            },
        },
    ],
}