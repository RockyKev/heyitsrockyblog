import React from "react";
import styled from "styled-components";

//cheatsheet components
import Jumbotron from "../components/cheatsheet/Jumbotron";
import TwoPanel_ImageText from "../components/cheatsheet/TwoPanel_ImageText";
import TwoPanel_TextImage from "../components/cheatsheet/TwoPanel_TextImage";
import TwoPanel_TextText from "../components/cheatsheet/TwoPanel_TextText";
import Minitron from "../components/cheatsheet/Minitron";
import ThreePanel_symbolText from "../components/cheatsheet/ThreePanel_symbolText";
import CallToActions from "../components/cheatsheet/CallToActions";
import Callout from "../components/cheatsheet/Callout";
import Navbar from "../components/cheatsheet/Navbar";
import Footer from "../components/cheatsheet/Footer";

const cheatsheet = () => {
  const List = () => (
    <ul>
      <li>Stock Photos: Pexel, Pixabay </li>
      <li>Stock Icons: Flaticon.com, the Noun Project </li>
      <li>CSS Buttons Generator: Google it </li>
      <li>HTML Editor: Google it</li>
    </ul>
  );

  const Wrapper = styled.div`
    padding: 0px 20px;

    h2 {
      padding-bottom: 4px;
      border-bottom: 4px solid purple;
    }
  `;

  return (
    <Wrapper>
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
      <List />
    </Wrapper>
  );
};

export default cheatsheet;
