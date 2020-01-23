import React, { FC, ReactElement } from "react";
import { getSlots } from "../slots";

const question = props => {
  const { slots, orphans } = getSlots(props.children);
  return (
    <div data-extract="question" className="response text">
      <div>?</div>
    </div>
  );
};

export default question;
