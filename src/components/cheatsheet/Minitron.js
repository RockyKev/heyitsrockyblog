import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

import Jumbo from "../../pagesimages/html-class-jumbo.jpg";

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

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
      .minitron {
        background-image: url("html-class-jumbo.jpg");
        width: 100%;
        height: 250px;
  
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
      }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
        <div class="minitron"> Get it now! </div>
      `}</code>
    </CodeBlock>
  );

  return (
    <section>
      <h2> Minitron (narrow bar) </h2>

      <Wrapper> Get it now!</Wrapper>
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default Minitron;
