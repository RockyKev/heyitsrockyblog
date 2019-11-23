import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "../styles/topbar.scss"

export default class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = { scrolled: false }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props
    const theme = this.context

    return (
      <nav className={scrolled ? "nav scroll" : "nav"}>
        {/* <nav className="nav"> */}
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              {/* <img src="#" />  */}
              Rocky Kev
            </Link>
          </div>
          <div className="links">
            <Link to="/blog/">Go to Blog</Link>
            <Link to="/work/">Work I've done</Link>
            <Link to="/about-me/">About Me</Link>
          </div>
        </div>
      </nav>
    )
  }
}

// text-align: center;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: flex-start;
//   background-color: yellow;

// const OtherThing = styled.div`
//   background-color: red;
//   font-size: 50px;
// `

// const Menu = styled.div`
//   display: block;
//   border: none;
//   text-align: center;
//   box-sizing: border-box;
//   text-decoration: none;
//   padding: 10px 25px;
//   cursor: pointer;
//   text-transform: uppercase;
//   letter-spacing: 2px;
// `
