import React from "react";
import "./app.css";
import { data } from "./data";
import { hoc } from "./utils";
import { useAppProps } from "./app.props";
import { CustomTree, TreeContainer, TreeNode } from "./components";

export const App = hoc(useAppProps, () => {
  return (
    <TreeContainer>
      <CustomTree
        data={data}
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps) => <TreeNode {...rd3tProps} />}
      />
    </TreeContainer>
  );
});
