import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

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

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
        .panel-3-image-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        column {
          display: flex;
          flex-direction: column; 
          justify-content: center;
          align-items: center;
          flex: 1;
        }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
        <section class="panel-3-image-text">
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
        </section>
      `}</code>
    </CodeBlock>
  );

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
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default ThreePanel_symbolText;
