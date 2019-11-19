import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Placeholder from "../components/placeholder"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hey Its Rocky's Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Hey Its Rocky's Blog!"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
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
