import React, { FC, ReactElement } from "react";
import { getSlots } from "../slots";

const orgname = props => {
  const { slots, orphans } = getSlots(props.children);
  return (
    <h1 data-extract="orgname" data-content="name" className="heading">
      {orphans}
    </h1>
  );
};

export default orgname;
