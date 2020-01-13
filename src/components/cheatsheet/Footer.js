import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

const Footer = () => {
  const Wrapper = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;

    p {
      padding: 20px;
    }
  `;

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
        .footer {
          background-color: black;
          width: 100%;
          display: flex;
          justify-content: space-between;
          color: white;
          padding: 10px;
        }

        .footer p {
          padding: 20px;
        }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
        <div class="footer"> 
          <p> Left content </p>
          <p> Copyright or something </p>
          <p> Social Media Logos </p>
        </div>
      `}</code>
    </CodeBlock>
  );

  return (
    <section>
      <h2> Footer </h2>

      <Wrapper>
        <p> Left content </p>
        <p> Copyright or something </p>
        <p> Social Media Logos </p>
      </Wrapper>
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default Footer;
