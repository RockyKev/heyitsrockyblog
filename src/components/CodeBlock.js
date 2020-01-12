import React from "react";
import styled from "styled-components";

const CodeBlock = props => {
  const Wrapper = styled.pre`
    background: black;
    color: white;
    padding: 10px;
    border: 2px dotted white;
  `;

  return (
    <section>
      <h2> {props.title} </h2>
      <Wrapper>{props.children}</Wrapper>
    </section>
  );
};

export default CodeBlock;
