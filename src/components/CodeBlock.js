import React from "react";
import styled from "styled-components";

const CodeBlock = props => {
  const Wrapper = styled.pre`
    background: black;
    color: white;
    margin: 10px;
    border: 6px inset dimgrey;
    max-height: 400px;
    overflow-y: auto;
  `;

  return (
    <section>
      <h3> {props.title} </h3>
      <Wrapper>{props.children}</Wrapper>
    </section>
  );
};

export default CodeBlock;
