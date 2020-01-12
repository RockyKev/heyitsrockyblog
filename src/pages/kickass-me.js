import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// import StyledBackgroundSection from "../components/BackgroundTest";

import CoolRocky from "../pagesimages/bg-rocky.png";
import bulletStar from "../pagesimages/css-star.png";

const GiantHeader = () => {
  const Header = styled.div`
    /* This renders the buttons above... Edit me! */
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <Header>
      <img src={CoolRocky} />
      <div>
        <h1>Hi, I'm Rocky</h1>
        <h2>and I'm really excited by these cookies.</h2>
        <p>(Photo after a conference in Washington DC)</p>
      </div>
    </Header>
  );
};

const CoverLetter = () => {
  const LongBar = styled.div`
    background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
    width: 100%;
    padding: 2rem 0;

    h2 {
      text-align: center;
      font-size: 4rem;
    }
  `;

  return (
    <>
      <LongBar>
        <h2> Cover Letter </h2>
        <CoverLetterContent />
      </LongBar>
    </>
  );
};

const CoverLetterContent = () => {
  const ContentWrapper = styled.div`
    margin: 0rem 1rem;
    padding: 4rem 4rem;
    background: white;
    text-align: left;
  `;

  return (
    <ContentWrapper>
      <p>
        Spicy jalapeno bacon ipsum dolor amet aliqua ham kielbasa landjaeger.
        Fugiat flank tempor sint, picanha exercitation alcatra andouille ham
        chuck ea. Reprehenderit cupidatat enim kielbasa officia. Dolore t-bone
        pig, deserunt swine beef fugiat cow. Buffalo ground round bresaola
        adipisicing, pork loin est short ribs.
      </p>
      <p>
        Tongue do occaecat commodo prosciutto turkey nulla picanha landjaeger
        capicola frankfurter short ribs. Nostrud prosciutto ullamco veniam
        labore biltong enim nisi magna sed pork belly irure shoulder sausage. Eu
        jowl dolor aute. Ball tip shoulder kielbasa sunt bresaola ham chicken,
        in ut eiusmod nulla meatball andouille. Eiusmod in pork belly, enim
        salami ham labore occaecat jerky pork chop buffalo.
      </p>
      <p>
        Chicken swine tongue chislic boudin lorem anim pork loin beef ribs.
        Cupim ipsum minim eiusmod commodo. Mollit nisi jerky laborum sint
        tenderloin incididunt ut beef ribs rump in velit turducken. Do eiusmod
        boudin filet mignon cow voluptate.
      </p>
      <p>
        Mollit consequat adipisicing, swine nisi deserunt aliquip prosciutto
        pork ea. Sint laboris fatback, short loin chicken capicola tri-tip
        sausage anim ham hock mollit tempor et consequat buffalo. Proident
        dolore chislic prosciutto nulla. Filet mignon anim beef ribs excepteur
        salami officia pork belly sunt. Meatball short ribs consectetur buffalo
        ad est aute rump shoulder. Biltong laborum pariatur occaecat salami.
        Laboris ad pork belly, veniam ut chislic beef turkey ribeye.
      </p>
      <p>
        Lorem pastrami cupim mollit cupidatat commodo aute voluptate duis do
        filet mignon tempor eu. Ullamco tri-tip chislic cillum, occaecat sirloin
        tail aute short ribs. Brisket laboris spare ribs kielbasa short ribs in
        et laborum t-bone. Magna sunt pig pork loin in ullamco salami landjaeger
        turkey exercitation cupidatat boudin porchetta.
      </p>
      <p> Rocky Kev </p>
    </ContentWrapper>
  );
};

const ListOfThings = () => {
  const ContentWrapper = styled.div`
    margin: 0rem 1rem;
    padding: 4rem 4rem;
    text-align: left;
    display: flex;
    flex-wrap: wrap;

    section {
      width: 50%;

      ul {
        padding-left: 2rem;
        list-style-image: url(${bulletStar});
      }
    }
  `;

  const ColumnList = styled.section`
    border: red 10px solid;
  `;

  return (
    <ContentWrapper>
      <ColumnList>
        <h2> My coding style:</h2>
        <ul>
          <li>Functional Programming</li>
          <li>Building libraries & templates</li>
          <li>I write for other people</li>
        </ul>
      </ColumnList>

      <ColumnList>
        <h2>I spend a lot of time learning:</h2>
        <ul>
          <li>I build silly things to test </li>
          <li>I write about what i learn</li>
          <li>I build quiz apps to test myself</li>
          <li>I did a presentation about it!</li>
        </ul>
      </ColumnList>

      <ColumnList>
        <h2>I like breaking complex things down:</h2>
        <ul>
          <li>Courses I built</li>
          <li>I teach workshops</li>
          <li>I write blogs</li>
          <li> I like to ask a lot of question</li>
        </ul>
      </ColumnList>

      <ColumnList>
        <h2>I'm Super active in the community</h2>
        <ul>
          <li>I manage the X group and the Y group</li>
          <li>I participate in a bunch</li>
          <li>And even provide free workshops</li>
          <li>And volunteer</li>
        </ul>
      </ColumnList>

      <ColumnList>
        <h2> Am a team player:</h2>
        <ul>
          <li>Work in diverse teams</li>
          <li>Writes SOPS</li>
          <li>Work in any environment</li>
          <li>I do X</li>
        </ul>
      </ColumnList>

      <ColumnList>
        <h2> I learn from comedy and copywriting</h2>
        <ul>
          <li>Writing more better</li>
          <li>Tell Stories</li>
          <li>Write jokes</li>
          <li>I read a lot of books</li>
        </ul>
      </ColumnList>
    </ContentWrapper>
  );
};

const kickassMe = () => {
  return (
    <div>
      <GiantHeader />
      <CoverLetter />
      <ListOfThings />
    </div>
  );
};

export default kickassMe;
