// @react
import React from "react";
import { hoc } from "../../utils";
import { useTreeNode } from "./tree-node.props";

export const TreeNode = hoc(
  useTreeNode,
  ({ nodeDatum, toggleNode, foreignObjectProps }) => {
    return (
      <>
        <g>
          <foreignObject {...foreignObjectProps}>
            <div
              style={{
                width: "200px",
                border: "1px solid black",
                backgroundColor: "#dedede",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
              {nodeDatum.children && (
                <button style={{ width: "100%" }} onClick={toggleNode}>
                  {nodeDatum.__rd3t.collapsed ? "Open" : "Close"}
                </button>
              )}
            </div>
          </foreignObject>
        </g>
      </>
    );
  }
);
