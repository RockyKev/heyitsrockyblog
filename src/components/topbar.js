import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


function Topbar() {
    return (
    <Menu>
      <OtherThing><Link to="/blog/">Go to Blog</Link> </OtherThing>
      <Link to="/archive/">
        All the posts
      </Link>
      <Link to="/about-me/">
        About Me
      </Link>

    </Menu>
    )
}

// text-align: center;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: flex-start;
//   background-color: yellow;


const OtherThing = styled.div`
    background-color: red;
    font-size: 50px;
`

const Menu = styled.div`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export default Topbar