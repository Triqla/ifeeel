import React, { FC, ReactElement } from "react";
import { getSlots } from "../slots";

const layout = props => {
  const { slots, orphans } = getSlots(props.children);
  return (
    <div data-extract="layout">
      {slots.orgname ? slots.orgname : ""}
      <div className="div-block">
        <div data-content="content" {...props.columns} className="feels">
          {orphans}
        </div>
      </div>
      <div className="buttons">
        <a
          id="w-node-cf627659d7d3-57a24aac"
          href="#0"
          className="link-block w-inline-block"
        >
          <img src="images/settings.svg" alt />
        </a>
        <a
          {...props.Ifeeel}
          id="w-node-1dd1b92a3910-57a24aac"
          href="#0"
          className="link-block w-inline-block"
        >
          <div className="text-block">I&nbsp;FEEEEEEEL....</div>
        </a>
      </div>
    </div>
  );
};

export default layout;
