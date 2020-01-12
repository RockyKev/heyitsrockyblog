import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

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

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: grey;
          color: white;
        }
  
        .nav-logo {
          float: left;  
        }
  
        .nav-links {
          float: right;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
  
        .nav-links li {
          display: block;
          float: left;
          width: 50px;
        }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
        <div class="navbar">
          <img class="nav-logo" src="https://via.placeholder.com/100/?Text=LOGO HERE">
  
          <ul class="nav-links">
            <li>Menu</li>
            <li>Team</li>
            <li>About</li>
            <li>Store</li>
            <li>Blog</li>
          </ul> 
            
        </div> 
      `}</code>
    </CodeBlock>
  );

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
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default Navbar;
