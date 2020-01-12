import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

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

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
      .panels-two-even {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
        
      .panels-two-even div {
        flex: 1;
        padding: 0 20px;
      }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
        <section class="panels-two-even"> 
          <div> 
            <p> Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
            <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
          </div>
  
          <div> 
            <p> Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
            <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
          </div>
        </section>
      `}</code>
    </CodeBlock>
  );

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
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default TwoPanel_TextText;
