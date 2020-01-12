import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

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

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
    .column-cta {
      display: flex;
      flex-direction: column; 
      justify-content: center;
      align-items: center;
      flex: 1;
    }
  
    .myButton {
      box-shadow: 0px 10px 14px -7px #276873;
      background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
      background-color:#599bb3;
      border-radius:8px;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:20px;
      font-weight:bold;
      padding:13px 32px;
      text-decoration:none;
      text-shadow:0px 1px 0px #3d768a;
    }
    .myButton:hover {
      background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
      background-color:#408c99;
    }
    .myButton:active {
      position:relative;
      top:1px;
    }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
      <section class="column-cta">       
        <h2> Don't let this opportunity slip by </h2> 
        <a href="#" class="myButton">Buy Now</a> 
      </section>
      `}</code>
    </CodeBlock>
  );

  return (
    <section>
      <h2> Call-to-Action </h2>

      <Wrapper>
        <h3> Don't let this opportunity slip by </h3>
        <a href="#" className="myButton">
          Buy Now
        </a>
      </Wrapper>
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default CallToActions;
