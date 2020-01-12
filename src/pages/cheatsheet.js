import React from "react";
import styled from "styled-components";

import CodeBlock from "../components/CodeBlock";
import ClickToHide from "../components/ClickToHide";

import Jumbo from "../pagesimages/html-class-jumbo.jpg";

// <CodeBlock title="HTML">  </CodeBlock>

/* THIS IS ALL THE CONTENT FROM THE CODE */

const Jumbotron = () => {
  const Wrapper = styled.div`
    background-image: url(${Jumbo});
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  `;

  const JumboCode = () => (
    <CodeBlock title="pre test">
      <code>{`
  <div class="jumbotron">
    <h2> TEXT FILLER 123 </h2>
  </div>
    `}</code>
    </CodeBlock>
  );

  return (
    <section>
      <h2>Jumbotron image </h2>
      <Wrapper>
        <h2> TEXT FILLER HERE </h2>
      </Wrapper>
      <ClickToHide>
        <JumboCode />
        <JumboCode />
      </ClickToHide>
    </section>
  );
};

const TwoPanel_ImageText = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    img {
      flex: 1;
      padding: 0 20px;
    }

    div {
      flex: 2;
      padding: 0 20px;
    }
  `;

  return (
    <section>
      <h2> 2-panel (image/text) - 70/30</h2>

      <Wrapper>
        <div>
          <p>
            {" "}
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </p>

          <p>
            Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
            courgette tatsoi pea sprouts fava bean collard greens dandelion okra
            wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          </p>
        </div>
        <img src="https://via.placeholder.com/250/" />
      </Wrapper>
    </section>
  );
};

const TwoPanel_TextImage = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    img {
      flex: 1;
      padding: 0 20px;
    }

    div {
      flex: 2;
      padding: 0 20px;
    }
  `;

  return (
    <section>
      <h2> 2-panel (image/text) - 70/30</h2>

      <Wrapper>
        <img src="https://via.placeholder.com/250/" />

        <div>
          <p>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </p>

          <p>
            Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
            courgette tatsoi pea sprouts fava bean collard greens dandelion okra
            wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

const TwoPanel_TextText = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    div {
      flex: 1;
      padding: 0 20px;
    }
  `;

  return (
    <section>
      <h2> 2-panel even (image, image) 50,50 </h2>

      <Wrapper>
        <div>
          <p>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </p>

          <p>
            Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
            courgette tatsoi pea sprouts fava bean collard greens dandelion okra
            wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          </p>
        </div>

        <div>
          <p>
            {" "}
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </p>

          <p>
            Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
            courgette tatsoi pea sprouts fava bean collard greens dandelion okra
            wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

const ThreePanel_symbolText = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    img {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
  `;

  return (
    <section>
      <h2> 3-panel (text plus image below it) </h2>

      <Wrapper>
        <column>
          <img src="https://via.placeholder.com/100/" />
          <h3> HEADER TEXT </h3>
          <p> This is sub-text here. </p>
        </column>

        <column>
          <img src="https://via.placeholder.com/100/" />
          <h3> HEADER TEXT </h3>
          <p> This is sub-text here. </p>
        </column>

        <column>
          <img src="https://via.placeholder.com/100/" />
          <h3> HEADER TEXT </h3>
          <p> This is sub-text here. </p>
        </column>
      </Wrapper>
    </section>
  );
};

const Minitron = () => {
  const Wrapper = styled.div`
    background-image: url(${Jumbo});
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  `;

  return (
    <section>
      <h2> Minitron (narrow bar) </h2>

      <Wrapper> Get it now!</Wrapper>
    </section>
  );
};

const CallToActions = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    .myButton {
      box-shadow: 0px 10px 14px -7px #276873;
      background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
      background-color: #599bb3;
      border-radius: 8px;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      font-size: 20px;
      font-weight: bold;
      padding: 13px 32px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #3d768a;
    }
    .myButton:hover {
      background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
      background-color: #408c99;
    }
    .myButton:active {
      position: relative;
      top: 1px;
    }
  `;

  return (
    <section>
      <h2> Call-to-Action </h2>

      <Wrapper>
        <h2> Don't let this opportunity slip by </h2>
        <a href="#" className="myButton">
          Buy Now
        </a>
      </Wrapper>
    </section>
  );
};

const Callout = () => {
  const Wrapper = styled.div`
    max-width: 600px;
    margin: 25px auto;
    padding: 20px;
    background: yellow;
    border: 2px dotted white;
    box-shadow: 2px 10px 0 rgba(0, 0, 0, 0.1);
  `;

  return (
    <section>
      <h2> Call out </h2>

      <Wrapper>
        <p>
          Celery quandong swiss chard chicory earthnut pea potato. Salsify taro
          catsear garlic gram celery bitterleaf wattle seed collard greens nori.
          Grape wattle seed kombu beetroot horseradish carrot squash brussels
          sprout chard.
        </p>

        <p>
          Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
          radish okra azuki bean corn fava bean mustard tigernut jícama green
          bean celtuce collard greens avocado quandong fennel gumbo black-eyed
          pea. Grape silver beet watercress potato tigernut corn groundnut.
          Chickweed okra pea winter purslane coriander yarrow sweet pepper
          radish garlic brussels sprout groundnut summer purslane earthnut pea
          tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
          black-eyed pea green bean zucchini gourd winter purslane silver beet
          rock melon radish asparagus spinach.
        </p>
      </Wrapper>
    </section>
  );
};

const Navbar = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: grey;
    color: white;

    .nav-logo {
      float: left;
      margin: 0;
    }

    .nav-links {
      float: right;
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;

      li {
        display: block;
        float: left;
        width: 50px;
        margin: 0;
      }
    }
  `;

  return (
    <section>
      <h2> Header (image left/ links right) </h2>

      <Wrapper>
        <img
          className="nav-logo"
          src="https://via.placeholder.com/100/?Text=LOGO HERE"
        />

        <ul className="nav-links">
          <li>Menu</li>
          <li>Team</li>
          <li>About</li>
          <li>Store</li>
          <li>Blog</li>
        </ul>
      </Wrapper>
    </section>
  );
};

const Footer = () => {
  const Wrapper = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 10px;
  `;

  return (
    <section>
      <h2> Footer </h2>

      <Wrapper>
        <p> Left content </p>
        <p> Copyright or something </p>
        <p> Social Media Logos </p>
      </Wrapper>
    </section>
  );
};

/* THIS IS ALL THE CONTENT FROM THE CODE */

const cheatsheet = () => {
  return (
    <div>
      <CodeBlock title="HTML"> BLAH BLAH BLAH </CodeBlock>

      <Jumbotron />
      <TwoPanel_ImageText />
      <TwoPanel_TextImage />
      <TwoPanel_TextText />
      <ThreePanel_symbolText />
      <Minitron />
      <CallToActions />
      <Callout />
      <Navbar />
      <Footer />
    </div>
  );
};

export default cheatsheet;
