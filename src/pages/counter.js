import React from "react"
import { Link, graphql } from "gatsby"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    const { data } = this.props

    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMdx.edges

    return (
      <div>
        <h1> Counter from {data.site.siteMetadata.title} </h1>
        <p> Current count: {this.state.count} </p>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>

        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>

        <p> Built by {data.site.siteMetadata.author} </p>
        <Link to="/">Take me home</Link>
      </div>
    )
  }
}

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

export default Counter
