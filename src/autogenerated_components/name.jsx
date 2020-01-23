import React, { FC, ReactElement } from "react";
import { getSlots } from "../slots";

const name = props => {
  const { slots, orphans } = getSlots(props.children);
  return (
    <div data-extract="name" className="div-block-3">
      <div data-content="content" className="top">
        {orphans}
      </div>
    </div>
  );
};

export default name;
