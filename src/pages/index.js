import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import Placeholder from "../components/placeholder"
import "../styles/index.scss"

//images
import YoungRocky from "../../content/assets/young-rocky.jpeg"
import Elearning from "../../content/assets/index_elearning.png"
import Worm from "../../content/assets/index_worm.png"
import Robot from "../../content/assets/index_robot.png"

import BlogProfessional from "../../content/assets/index_1_code.png"
import BlogInterests from "../../content/assets/index_3_web-design.png"
import BlogCoding from "../../content/assets/index_2_simulation.png"

function Hi() {
  return (
    <div className="header">
      <img src={YoungRocky} alt="A younger more stylish me" width={300} />
      <p>
        I&#8217;ve never been one to sit around and wait until the stars align
        and it&#8217;s the perfect time. <br />
        <br /> I look for opportunities. If I can&#8217;t find them, I make
        them. Break things. Fail. Try again. Life is too short. Do stuff that
        matters.
        <br />
        <br />
        What&#8217;s not okay? Stagnation. Ideas without thinking 5 steps deep.
        Saying that it&#8217;s &#8220;Somebody else&#8217;s job.&#8221; Doing
        things because &#8220;That&#8217;s how we&#8217;ve always done
        it.&#8221; <br />
        <br /> Be whimsy. Think creatively. Build cool things.
      </p>
    </div>
  )
}
const CardWrapper = props => {
  return (
    <React.Fragment>
      <div className="card-title-image">
        <h3 className="card-title"> {props.title}</h3>{" "}
        <img className="card-image" src={props.image} />
      </div>
      {props.body ? (
        <div className="card-text">
          <p>{props.body}</p>
        </div>
      ) : null}
    </React.Fragment>
  )
}

const RowWrapper = props => {
  return (
    <div className="row">
      <div className="card-title-image">
        <a href={props.link}>
          <h3 className="card-title"> {props.title}</h3>
        </a>
        <a href={props.link}>
          <img className="card-image" src={props.image} />
        </a>
      </div>
      {props.body ? (
        <div className="card-text">
          <p>{props.body}</p>
        </div>
      ) : null}
    </div>
  )
}

function RecentWork() {
  return (
    <div>
      <h2 className="main-title">Recent Work </h2>
      <p> Working on getting more content from the prior blog. </p>
      <div className="card-container recent-work">
        <div className="card">
          <Link to="/project-peerreview/">
            <CardWrapper title="Peer Review" image={Elearning} />
          </Link>
        </div>

        <div className="card">
          <Link to="/project-wormapp/">
            <CardWrapper title="Worm App" image={Worm} />
          </Link>
        </div>
      </div>

      {/* <div className="card-container recent-work">
        <CardWrapper title="OTHER PROJECT" image={Elearning} link="#" />
        <CardWrapper title="OTHER PROJECT" image={Robot} link="#" />
        <CardWrapper title="OTHER PROJECT" image={Elearning} link="#" />
        <CardWrapper title="OTHER PROJECT" image={Robot} link="#" />
        <CardWrapper title="OTHER PROJECT" image={Elearning} link="#" />
        <CardWrapper title="OTHER PROJECT" image={Robot} link="#" />
      </div> */}
    </div>
  )
}

function NewBlogPost() {
  return (
    <div className="blog-container">
      <h2 className="main-title">New Blog Posts </h2>
      <div className="card-container blog">
        <RowWrapper
          title="Coding"
          image={BlogCoding}
          body="Coding and How-tos guides. Education. [Coming soon: GraphQL display of tagged content]"
          link="blog"
        />
        <RowWrapper
          title="Interests"
          image={BlogInterests}
          body="Less techie/professional. Hacks! [Coming soon: GraphQL display of tagged content]"
          link="blog"
        />
        <RowWrapper
          title="Professional"
          image={BlogProfessional}
          body="team, management, or code thoughts [Coming soon: GraphQL display of tagged content]"
          link="blog"
        />
      </div>
    </div>
  )
}

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hey It's Rocky's Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Hey, It's Rocky!"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Hi />
        <RecentWork />
        <NewBlogPost />
        {/* 
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        <Link to="/archive/">
          <Button marginTop="35px">All the posts</Button>
        </Link>
        <Link to="/about-me/">
          <Button marginTop="35px">About Me</Button>
        </Link> */}

        {/* <Placeholder /> */}
      </Layout>
    )
  }
}

// const { data } = this.props
// const postTitle = data.allMdx.edges.node.frontmatter.title;
// const postDescription = data.allMdx.edges.node.frontmatter.title;
// const post = data.allMdx.edges.node

export default IndexPage

// export const pageQuery = graphql`
//   query {
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
//             categories
//           }
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
//   query {
//     fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
