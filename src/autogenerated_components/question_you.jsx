import React, { FC, ReactElement } from "react";
import { getSlots } from "../slots";

const question_you = props => {
  const { slots, orphans } = getSlots(props.children);
  return (
    <div data-extract="question_you" className="response highlight">
      <div>?</div>
    </div>
  );
};

export default question_you;
