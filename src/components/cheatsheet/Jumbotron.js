import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

import Jumbo from "../../pagesimages/html-class-jumbo.jpg";

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

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
    .jumbotron {
        background-image: url("html-class-jumbo.jpg");
        width: 100%;
        height: 500px;
        color: white;
  
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
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
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default Jumbotron;
