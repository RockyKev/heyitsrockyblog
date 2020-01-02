import React from "react"

import Layout from "../components/layout"

//css
import "../styles/project.scss"

//images
import Cover from "../../content/assets/website-man-yells-at-cloud.jpg"

function ExternalLink(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.url}
    </a>
  )
}

class ProjectWebsites extends React.Component {
  render() {
    const siteTitle = "Single Page Websites"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <img src={Cover} alt="Single Page Websites" width={600} />
        <h2 id="-u-table-of-contents-u-">
          <u>Table of Contents</u>
        </h2>
        <ul>
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#pizza">Bring Pizza Back to Spokane</a>
          </li>
          <li>
            <a href="#videoplayer">Youtube API and Mario Paint</a>
          </li>
          <li>
            <a href="#teachjs">Teaching JavaScript</a>
          </li>
          <li>
            <a href="#frontenddev">Spokane Front End Dev</a>
          </li>
          <li>
            <a href="#unlisted">Sites I need to put in here one day</a>
          </li>
        </ul>
        <h2>
          <u id="intro">Introduction</u>
        </h2>
        <p>
          They say that there are over 1.5 billion websites out there, and about
          200 million are active right now.
        </p>
        <p>I am responsible for some of them. I'm sorry.</p>
        <p>
          This is a portfolio of all the single-page websites that I've built
          over the years. Single-page websites are often for a very specific
          cause/niche. Things like landing pages, direct call-to-action pages,
          or simple sites for new products fall under this category.
        </p>
        <p>
          Not included: my fansite for 2000's boyband Nsync, and all those weird
          Geocities sites.
        </p>
        <h2>
          <u id="pizza">Bring Pizza Back to Spokane</u>
        </h2>
        <p>
          Created because I believe in food. At my evening meetups, I buy food
          for attendees. Link:{" "}
          <ExternalLink url="https://bringpizzabacktomeetups.rockykev.repl.co/" />
        </p>

        <h2>
          <u id="videoplayer">Youtube API and Mario Paint</u>
        </h2>
        <p>
          This is a MVP to showcase how to create a lesson page that is
          controlled via the keyboard. Mario Paint sounds are used because
          they're amazing. Link:{" "}
          <ExternalLink url="https://rockykev.github.io/js-musicmaker/" />
        </p>
        <h2>
          <u id="teachjs">Teaching JavaScript</u>
        </h2>
        <p>
          Taught 30 classes during Sept - Dec 2019. Link:{" "}
          <ExternalLink url="https://rk-live-lets-learn-it-together-js30.rockykev.repl.co/" />
        </p>
        <h2>
          <u id="frontenddev">Spokane's Front End Dev</u>
        </h2>
        <p>
          Had to create a code of conduct and faq for the meetup groups I host.
          Link:{" "}
          <ExternalLink url="https://rockykev.github.io/spokane-front-end-dev-website/" />
        </p>
        <h2>
          <u id="unlisted">Sites I need to put in here one day</u>
        </h2>
        <p>
          Looking for all the non-single-page websites I've built? I'll put them
          up soon.
        </p>
      </Layout>
    )
  }
}

export default ProjectWebsites
