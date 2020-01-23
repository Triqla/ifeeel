import React, { FC, ReactElement } from "react";
import { getSlots } from "../slots";

const column_label = props => {
  const { slots, orphans } = getSlots(props.children);
  return (
    <div data-extract="column_label" className="toptop">
      <div data-content="content" className="top">
        {orphans}
      </div>
    </div>
  );
};

export default column_label;
