import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/index.scss"

class AboutMe extends React.Component {
  render() {
    const siteTitle = "About Me"
    const currentPage = ""

    return (
      <Layout location={this.props.location.pathname} title={siteTitle}>
        {console.log(this.props.location.pathname)}
        <div className="skills">
          <_Languages />
          <_Libraries />
          <_SkillSet />
        </div>
        <div>
          <h2> Okay, but who are you? </h2>

          <RockyNutshell />
          <Working />
          <Teaching />
          <Speaking />
          <ExternalHobbies />
        </div>
        <Link to="/"> Return home </Link> <br />
      </Layout>
    )
  }
}

function _Languages() {
  return (
    <div className="card">
      <h2 className="title">Languages</h2>
      <div>CSS</div>
      <div>Javascript</div>
      <div>PHP</div>
      <div>Python</div>
      <div>SQL</div>
    </div>
  )
}

function _Libraries() {
  return (
    <div className="card">
      <h2 className="title">Frameworks</h2>
      <div>JQuery</div>
      <div>Laravel</div>
      <div>Bootstrap</div>
      <div>WordPress</div>
      <div>FontAwesome</div>
      <div>React</div>
    </div>
  )
}

function _SkillSet() {
  return (
    <div className="card">
      <h2 className="title">Skillset</h2>
      <div>Strategic Thinking</div>
      <div>Project Management</div>
      <div>Course Design/Course Building</div>
      <div>Copywriting/Content Dev</div>
      <div>Adobe Suite</div>
      <div>G Suite</div>
      <div>CRM + Integrations</div>
    </div>
  )
}

function RockyNutshell() {
  return (
    <React.Fragment>
      <h3> Rocky in a Nutshell </h3>

      <p>
        I&#8217;m a developer. Maybe a list of{" "}
        <Link to="work">my experience</Link> will be helpful!
      </p>

      <p>
        In my life &#8211; I&#8217;ve built games, apps, websites, and tinkered
        in automation, integrations and bots.
      </p>

      <p>
        I like to find projects that stretch my skills in interesting ways.
        Learning is forever, and continuous growth is my end-goal.
      </p>

      <p>
        I&#8217;ve been in developer communities in Philadelphia, Salem,
        Portland, and Spokane WA. I&#8217;ve spoken at WordPress events and was
        a host for{" "}
        <a
          href="https://www.meetup.com/Mentorship-Saturdays/events/262115274/"
          target="_blank"
        >
          Mentorship Saturdays
        </a>
        (until I had to move).
      </p>

      <p>
        So in a nutshell &#8211; I&#8217;m a developer. Oh, and I like chocolate
        wafers.
      </p>
    </React.Fragment>
  )
}

function Working() {
  return (
    <React.Fragment>
      <h3>Working (Remotely)</h3>

      <p>
        >I have been working both remote/at an office of the past 5 years.
        Contrary to popular believe, working remotely isn&#8217;t about waking
        up and working in your pajamas.
      </p>

      <p>
        It means **working independently**, being resourceful and
        problem-solving on my own. With team members all over the world (across
        the States, in Europe and South-East Asia),  meetings had to be
        efficient as possible. So asking the right questions and identifying the
        goal is a priority.
      </p>

      <p>
        It means **being self-motivated.** To meet the demands of the work, I
        had to organize the priority of projects on my own, take them as far as
        I could before I needed help, and do my own research to problem solve.
      </p>

      <p>
        It means **having strong written communication skills**. From following
        up with detailed project plans and proposals, to writing SOPs so I can
        pass my knowledge to the whole team. To improve the clarity of my
        messages, I took courses on copywriting/blogging and made money as a
        guest blogger.
      </p>

      <p>
        It means **being incredibly comfortable with learning all the time**.
        Tech changes fast, and I have to be on the cutting edge of technology.
        I&#8217;ve learned new programming languages in a few weeks to meet the
        needs of a project. I go  through a online course every week, and try to
        finish a new book every two weeks.
      </p>

      <p>
        If your next statement is: _&#8220;Working remotely? You MUST be a weird
        introvert!&#8221;_
      </p>

      <p>
        Yep! My energy does get drained talking to people. There&#8217;s no
        question there.
      </p>

      <p>
        But it doesn&#8217;t stop me from working with clients directly,
        participate in speaking events, and hosting meet-ups. Having worked at a
        comedy club in a previous life &#8212; you get used to being
        uncomfortable. (being on stage and getting no laughs is super awkward.)
      </p>
    </React.Fragment>
  )
}

function Teaching() {
  return (
    <React.Fragment>
      <h3>Teaching</h3>
      <p></p>
      Teaching is my passion.
      <p>
        {" "}
        I&#8217;ve always stood by the policy of NEVER being the bottleneck. If
        you&#8217;re the only person who can do a specific task, then
        you&#8217;re hoarding information. Teaching provides that outlet to
        share information and level up your team.
      </p>
      <p>
        {" "}
        My experience teaching includes building online courses for Mirasee
        (fifteen courses in three years), writing documentation and SOPs for
        internal knowledge, and crafting videos and blog posts to share
        knowledge.
      </p>
      <p>
        {" "}
        I am also a volunteer/mentor-in-training at SCORE, a network of expert
        business mentors with over 300 chapters nationwide.
      </p>
      <p>
        {" "}
        Past jobs include teaching within the school district and private art
        schools, and volunteering as a teacher for religious organizations and
        non-profits.
      </p>{" "}
    </React.Fragment>
  )
}

function Speaking() {
  return (
    <React.Fragment>
      <h3> Speaking </h3>
      <p>
        The best educators are also persuasive speakers. Summoning up your
        collective knowledge on a subject and turning it into a presentation is
        also a powerful educational tool.
      </p>
      <p>
        My background working at Helium Comedy Club provided me with a front row
        seat to learn directly from the masters on stage presence, cadence, mic
        control and performance. I&#8217;m also a part of the local Spokane
        Valley ToastMasters organization.
      </p>

      <p>
        I&#8217;ve spoken at WordPress events, small meetups, and live webinars
        streamed around the world.
      </p>
      <p></p>
      <p>
        I&#8217;m the host of the Spokane WordPress group and have participated
        in many speaking events.
      </p>
    </React.Fragment>
  )
}

function ExternalHobbies() {
  return (
    <React.Fragment>
      <h3> External Hobbies </h3>
      <p>
        To relax, you might catch me listening to audio books, hiking and
        biking, or playing video games.
      </p>
      <p>
        Having experienced failure by the public school system, I give back to
        non-profits and the community. Past volunteer experience includes the
        Portland Saturday Academy providing STEM education, the Salem Dream
        Center providing art education, soup kitchens and food pantries, and
        working with the Red Cross giving blood and plasma. Current volunteer
        experience includes teaching workshops on web development and online
        marketing.
      </p>
    </React.Fragment>
  )
}

export default AboutMe
