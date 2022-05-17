// @styles
import "./tree-node.css";
// @react
import React from "react";
// @utils
import { hoc } from "../../utils";
// @hook
import { useTreeNode } from "./tree-node.props";

export const TreeNode = hoc(
  useTreeNode,
  ({ nodeDatum, toggleNode, foreignObjectProps, handleAdd, handleEdit }) => {
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
              <div className="button-wrapper">
                {nodeDatum.children && (
                  <button onClick={toggleNode}>
                    {nodeDatum.__rd3t.collapsed ? "Open" : "Close"}
                  </button>
                )}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleAdd}>Add</button>
              </div>
            </div>
          </foreignObject>
        </g>
      </>
    );
  }
);