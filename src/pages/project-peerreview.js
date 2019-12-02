import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

//images
import Peer from "../../content/assets/Peer-Review.png"

class ProjectPeerReview extends React.Component {
  render() {
    const siteTitle = "Project Peer Review"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <img src={Peer} alt="Peer Review Dashboard" width={600} />
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
          One big project I worked on was The Peer Review system. The idea was
          to have a system where students review each other&#8217;s work, thus
          reducing manpower on the instructor, and increase student
          participation.{" "}
        </p>
        <p>Development of this tool was a team effort. </p>
        <p>
          The Peer Review System was a unique mechanism in the Mirasee Courses
          space, and I have yet to find a system that functioned as well as
          that. If you&#8217;re curious of how the Peer Review system works
          &#8212; join the{" "}
          <a href="https://mirasee.com/2018/bib/notification">
            Business Ignition Bootcamp
          </a>{" "}
          to see it in action!
        </p>
        <h2 id="-u-id-feature-features-u-">
          <u id="feature">Features</u>
        </h2>
        <p>
          <u>How it works: </u>
        </p>
        <ol>
          <li>
            <p>
              During the Homework Due Phase &#8212; Student A submits their
              homework.{" "}
            </p>
          </li>
          <li>
            <p>Once all homeworks are in, Peer Review starts. </p>
          </li>
          <li>
            During the Peer Review Phase &#8212; Student A logs in to review
            Student B&#8217;s homework.{" "}
          </li>
          <li>
            In order to complete this phase, Student A must review 3 peer
            reviews.{" "}
          </li>
          <li>
            After Peer Review is finished, Student A should receive 3 peer
            reviews on their own homework.{" "}
          </li>
        </ol>
        <p>
          <u>Rules</u>:{" "}
        </p>
        <ol>
          <li>All submissions/peer review is anonymous. </li>
          <li>
            <strong>Student A</strong> must not receive their own work to
            review, or the same review from prior. (Example:{" "}
            <strong>Student A</strong> should not get <strong>Student B</strong>
            &#8216;s homework three times.)
          </li>
          <li>
            The Review Pool randomly selects a homework to provide to a student.{" "}
          </li>
          <li>
            If <strong>Student A</strong> spends longer than 60 minutes on the
            review, it goes back into the Review Pool, to avoid
            &#8216;locking&#8217; a review for someone who becomes idle within
            the program.
          </li>
          <li>
            The Review Pool&#8217;s algorithm ensures all homeworks receive a
            minimum of 1 review.
          </li>
          <li>
            The Review Pool&#8217;s algorithm ensures all homeworks receive a
            maximum of 3 reviews.
          </li>
          <li>
            Mathematically, all participating students should receive at least 1
            review. The assumption is that at least 80% of students will commit
            to completing the Peer Review stage.{" "}
          </li>
        </ol>
        <h2 id="-u-id-build-built-with-u-">
          <u id="build">Built With</u>
        </h2>
        <p>Our LMS was on a LAMP Stack running WordPress. </p>
        <p>
          <u>Presentation Layer: </u>
          <br />
          Bootstrap library, with HTML/CSS.
          <br />
          We used custom shortcodes that tied in with Gravity Forms to generate
          a homework/peer review UI.
        </p>
        <p>
          <u>Application Layer: </u>
          <br />
          The algorithm and Peer Review selection was written in PHP as a custom
          plugin.{" "}
        </p>
        <p>
          <u>Data Layer: </u>
          <br />
          The Peer Review system used Gravity Forms to store homework data
          within the MySQL database.{" "}
        </p>
        <p>Within the database, we set up 2 MySQL Tables </p>
        <ul>
          <li>Table 1 stored user IDs, and homework submission IDs. </li>
          <li>
            Table 2 stored User IDs, homework submission IDs, and peer
            submissions ID.{" "}
          </li>
        </ul>
        <hr class="wp-block-separator" />

        <p>
          There&#8217;s another set of code that then pulls who reviewed the
          student&#8217;s work, and displays that back to the student.{" "}
        </p>
        <p>
          For example: <strong>Student A</strong> wants to see the feedback on
          THEIR homework.
        </p>
        <p>
          The code will visit Table 2, and will look for that homework
          submission ID, and display all the Peer Reviews for that homework
          submission in a new page.{" "}
        </p>
        <h2 id="-u-id-explanation-explanation-u-">
          <u id="explanation">Explanation</u>
        </h2>
        <ol>
          <li>
            You make a &#8216;homework questions&#8217; &amp; &#8216;peer review
            questions&#8217; within gravity forms.{" "}
            <ul>
              <li>
                That creates two form IDs. Example: &#8220;Homework Week 1
                &#8211; ID1&#8221; &amp; &#8220;Peer Review Week 1 &#8211;
                ID2&#8242;.
              </li>
            </ul>
          </li>
          <li>
            When the user submits the homework, it fires off a api call to add
            that user, that homework submission ID, and the form ID to the SQL
            table 1.{" "}
          </li>
          <li>
            When a user visits the Peer Review, they are given two columns.{" "}
            <ul>
              <li>Column 1 is generated by the Peer Review code. </li>
              <li>
                Column 2 is the standard Gravity forms (i.e. Peer Review Week 1
                &#8211; ID2&#8242;.)
              </li>
              <li>
                To generate Column 1, the Peer Review code follows &#8216;the
                rules&#8217; (listed above), and pulls a student&#8217;s
                homework submission from the database. It then notates who
                received that homework, the homework submission ID, and the Peer
                Review ID in Table 2.{" "}
              </li>
              <li>
                If the user fails to submit &#8211; another flag is added to
                that Peer Review ID, stating that the review failed and to
                return it back into the Review Pool.{" "}
              </li>
            </ul>
          </li>
          <li>On submission of the review, Table 2 gets updated. </li>
          <li>
            Everything is tracked in the Peer Review table. Overall, the code
            will know that <strong>Student A</strong> has reviewed the following
            homeworks &#8211;&gt;{" "}
            <strong>Student B, Student C, and Student D.</strong>{" "}
          </li>
          <li>
            Afterwards, a separate code displays that student&#8217;s results.{" "}
          </li>
        </ol>
        <h2 id="-u-id-acknowledgements-acknowledgements-u-">
          <u id="acknowledgements">Acknowledgements</u>
        </h2>
        <p>Shout out to the Mirasee team for all the bug testing. </p>
        <p>The development team: </p>
        <p>
          My work was defining the spec doc, developing much of the design/form
          management and additional functionality.{" "}
          <a href="https://www.linkedin.com/in/krunalpatel/">Krunal Patel</a>{" "}
          was involved in the algorithms and SQL data management.{" "}
          <a href="https://www.linkedin.com/in/maureenlauder/">
            Maureen Lauder
          </a>{" "}
          was in charge of project management.
        </p>
      </Layout>
    )
  }
}

export default ProjectPeerReview
