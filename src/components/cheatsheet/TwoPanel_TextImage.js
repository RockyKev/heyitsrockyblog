import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

const TwoPanel_TextImage = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      flex: 1;
      padding: 0 20px;
      max-width: 400px;
    }

    div {
      flex: 2;
      padding: 0 20px;
    }
  `;

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
        .panels-two {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
          
        .panels-two img {
          flex: 1;
          padding: 0 20px;
          max-width: 400px;
        }
  
        .panels-two div {
          flex: 2;
          padding: 0 20px;
        }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
        <section class="panels-two"> 
          <img src="https://via.placeholder.com/250/" /> 
          <div> 
            <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
            <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
          </div>
        </section>
      `}</code>
    </CodeBlock>
  );

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
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default TwoPanel_TextImage;
