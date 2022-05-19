// @react
import React from "react";
// @react-d3-tree
import Tree from "react-d3-tree";
// @utils
import { hoc } from "../../utils";
// @components
import { useCustomTreeProps } from "./custom-tree.props";

// ------------------------------------------------------->>

/**
 * CustomTree component
 */

export const CustomTree = hoc(useCustomTreeProps, ({ ...props }) => {
  return (
    <>
      <Tree {...props} />
    </>
  );
});
