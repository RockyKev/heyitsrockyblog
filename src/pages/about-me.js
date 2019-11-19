import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class AboutMe extends React.Component {
  // render() {
  //   const { data } = this.props
  //   const siteTitle = data.site.siteMetadata.title
  //   const posts = data.allMdx.edges

  //   return (
  //     <Layout location={this.props.location} title={siteTitle}>
  //       <SEO title="All posts" />
  //       <Bio />
  //       <div style={{ margin: "20px 0 40px" }}>
  //         {posts.map(({ node }) => {
  //           const title = node.frontmatter.title || node.fields.slug
  //           return (
  //             <div key={node.fields.slug}>
  //               <h3
  //                 style={{
  //                   marginBottom: rhythm(1 / 4),
  //                 }}
  //               >
  //                 <Link
  //                   style={{ boxShadow: `none` }}
  //                   to={`blog${node.fields.slug}`}
  //                 >
  //                   {title}
  //                 </Link>
  //               </h3>
  //               <small>{node.frontmatter.date}</small>
  //               <p
  //                 dangerouslySetInnerHTML={{
  //                   __html: node.frontmatter.description || node.excerpt,
  //                 }}
  //               />
  //             </div>
  //           )
  //         })}
  //       </div>
  //       <Link to="/">
  //         <Button marginTop="85px">Go Home</Button>
  //       </Link>
  //     </Layout>
  //   )
  // }

  render() {
    const siteTitle = "About Me here"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1> About Me </h1>
        <p> this is the stuff about me </p>
        <Link to="/"> Return home </Link> <br />
        <Link to="/counter"> Go to Counter </Link>
      </Layout>
    )
  }
}

export default AboutMe

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
