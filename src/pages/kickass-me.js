import React from "react";
import Styled from "styled-components";

//query for graphQL to get giant header

const GiantHeader = () => <div>GIANT HEADER</div>;

const ListOfThings = () => <div>List</div>;

const CoverLetter = () => <div>GiantParagraph</div>;

const kickassMe = () => {
  return (
    <div>
      <GiantHeader />
      <CoverLetter />

      <ListOfThings />
    </div>
  );
};

export default kickassMe;
