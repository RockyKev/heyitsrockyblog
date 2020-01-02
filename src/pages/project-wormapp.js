import React from "react"

import Layout from "../components/layout"

//css
import "../styles/project.scss"

//images
import Cover from "../../content/assets/project_worm_cover.png"
import Worm1 from "../../content/assets/project_worm1.png"
import Worm2 from "../../content/assets/project_worm2.png"

class ProjectPeerReview extends React.Component {
  render() {
    const siteTitle = "Project Worm App"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <img src={Cover} alt="Worm App - for mobile devices" width={600} />
        <h2 id="-u-table-of-contents-u-">
          <u>Table of Contents</u>
        </h2>
        <ul>
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#feature">Features</a>
          </li>
          <li>
            <a href="#build">Built With</a>
          </li>
          <li>
            <a href="#explanation">Explanation</a>
          </li>
          <li>
            <a href="#acknowledgements">Acknowledgements</a>
          </li>
          <li>
            <a href="#additional">Additional</a>
          </li>
        </ul>
        <h2 id="-u-id-intro-introduction-u-">
          <u id="intro">Introduction</u>
        </h2>
        <p>
          Pet Rocks. Disco. Star Wars. Transformers. Pokemon Cards. Doing the
          Floss.
        </p>
        <p>Tomorrow's fad? Vermicomposting.</p>
        <p>
          I built the Worm app's primary goal is to help streamline the process
          of starting a worm bin. No longer does a potential worm farmer need to
          access dozens of blog posts and youtube videos, when the Worm App can
          get them started quickly.{" "}
        </p>
        <p>
          Github link:{" "}
          <a
            href="https://github.com/RockyKev/nucamp4-react-native-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Worm App Repo
          </a>
        </p>
        <div className="side-by-side">
          <img src={Worm1} alt="Worm App - for mobile devices" width={600} />
          <img src={Worm2} alt="Worm App - for mobile devices" width={600} />
        </div>
        <h2 id="-u-id-feature-features-u-">
          <u id="feature">Features</u>
        </h2>
        <p>
          The Worm App is a simple documentation/resource app. There are 3
          screens:
          <ul>
            <li>
              {" "}
              Quick Start: which contains the step-by-step to setting up a worm
              bin.{" "}
            </li>
            <li>
              {" "}
              Questions and Answers: Which lists some unknowns users may have in
              their new enterprise as a worm farmer.{" "}
            </li>
            <li>
              {" "}
              Foods: For those curious if they can feed their worm pineapples or
              tube socks.{" "}
            </li>
          </ul>
        </p>

        <h2 id="-u-id-build-built-with-u-">
          <u id="build">Built With</u>
        </h2>
        <p>
          {" "}
          React and React Native. Simulated mobile environments using Expo.
        </p>
        <h2 id="-u-id-acknowledgements-acknowledgements-u-">
          <u id="acknowledgements">Acknowledgements</u>
        </h2>
        <p>
          Shout out to the group at Nucamp for reviewing my app and identifying
          new opportunities to explore.
        </p>
      </Layout>
    )
  }
}

export default ProjectPeerReview
