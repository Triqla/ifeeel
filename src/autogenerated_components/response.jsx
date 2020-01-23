import React, { FC, ReactElement } from "react";
import { getSlots } from "../slots";

const response = props => {
  const { slots, orphans } = getSlots(props.children);
  return (
    <div data-extract="response" data-content="content" className="response">
      {orphans}
    </div>
  );
};

export default response;
