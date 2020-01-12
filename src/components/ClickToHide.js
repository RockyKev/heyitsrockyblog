import React from "react";
import styled from "styled-components";

const ClickToHide = props => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      width: 50%;
    }
  `;

  return <Wrapper>{props.children}</Wrapper>;
};

export default ClickToHide;
