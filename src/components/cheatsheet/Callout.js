import React from "react";
import styled from "styled-components";

import CodeBlock from "../CodeBlock";
import ClickToHide from "../ClickToHide";

const Callout = () => {
  const Wrapper = styled.div`
    max-width: 600px;
    margin: 25px auto;
    padding: 20px;
    background: yellow;
    border: 2px dotted white;
    box-shadow: 2px 10px 0 rgba(0, 0, 0, 0.1);
  `;

  const CSSBlock = () => (
    <CodeBlock title="CSS">
      <code>{`
    .callout {
      max-width: 600px;
      margin: 25px auto;
      padding: 20px;
      background: yellow; 
      border: 2px dotted white;
      box-shadow: 2px 10px 0 rgba(0,0,0,0.1);
    }
      `}</code>
    </CodeBlock>
  );

  const HtmlBlock = () => (
    <CodeBlock title="HTML">
      <code>{`
        <section class="callout"> 
          <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
          <p>Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.</p>
        </section>
      `}</code>
    </CodeBlock>
  );

  return (
    <section>
      <h2> Call out </h2>

      <Wrapper>
        <p>
          Celery quandong swiss chard chicory earthnut pea potato. Salsify taro
          catsear garlic gram celery bitterleaf wattle seed collard greens nori.
          Grape wattle seed kombu beetroot horseradish carrot squash brussels
          sprout chard.
        </p>

        <p>
          Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
          radish okra azuki bean corn fava bean mustard tigernut jícama green
          bean celtuce collard greens avocado quandong fennel gumbo black-eyed
          pea. Grape silver beet watercress potato tigernut corn groundnut.
          Chickweed okra pea winter purslane coriander yarrow sweet pepper
          radish garlic brussels sprout groundnut summer purslane earthnut pea
          tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
          black-eyed pea green bean zucchini gourd winter purslane silver beet
          rock melon radish asparagus spinach.
        </p>
      </Wrapper>
      <ClickToHide>
        <CSSBlock />
        <HtmlBlock />
      </ClickToHide>
    </section>
  );
};

export default Callout;
