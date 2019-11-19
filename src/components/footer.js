import React from "react"
import { Link } from "gatsby"
// import containerStyles from "../styles/topbar.module.scss"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()} - Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a> and lots of coffee.
    </div>
  )
}

export default Footer
