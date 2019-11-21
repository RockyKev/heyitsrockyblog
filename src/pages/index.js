import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import Placeholder from "../components/placeholder"
import YoungRocky from "../../content/assets/young-rocky.jpeg"
import "../styles/index.scss"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hey Its Rocky's Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Hey Its Rocky's Blog!"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="header">
          <img src={YoungRocky} alt="A younger more stylish me" width={300} />
          <p>
            I&#8217;ve never been one to sit around and wait until the stars
            align and it&#8217;s the perfect time. <br />
            <br /> I look for opportunities. If I can&#8217;t find them, I make
            them. Break things. Fail. Try again. Life is too short. Do stuff
            that matters.
            <br />
            <br />
            What&#8217;s not okay? Stagnation. Ideas without thinking 5 steps
            deep. Saying that it&#8217;s &#8220;Somebody else&#8217;s
            job.&#8221; Doing things because &#8220;That&#8217;s how we&#8217;ve
            always done it.&#8221; <br />
            <br /> Be whimsy. Think creatively. Build cool things.
          </p>
        </div>

        {/* <img src="https://i.imgur.com/rqBKk5a.jpg" /> */}
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Hi I'm Rocky.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        <Link to="/archive/">
          <Button marginTop="35px">All the posts</Button>
        </Link>
        <Link to="/about-me/">
          <Button marginTop="35px">About Me</Button>
        </Link>

        {/* <Placeholder /> */}
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
