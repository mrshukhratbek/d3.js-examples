// @styles
import './tree-node.css';
// @react
import React from 'react';
// @utils
import { hoc, colors } from '../../utils';
// @hook
import { useTreeNode } from './tree-node.props';

export const TreeNode = hoc(
  useTreeNode,
  ({ nodeDatum, toggleNode, foreignObjectProps, handleAdd, handleEdit }) => {
    nodeDatum.__rd3t.collapsed = !nodeDatum.isOpen;
    return (
      <>
        <g>
          <foreignObject {...foreignObjectProps}>
            <div
              className="tree-node"
              style={{
                width: '200px',
                border: '1px solid black',
                backgroundColor: `${
                  colors[nodeDatum.type] ? colors[nodeDatum.type] : '#dedede'
                }`,
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <h3 className="node-name" style={{ textAlign: 'center' }}>
                {nodeDatum.name}
              </h3>
              <div className="button-wrapper">
                {nodeDatum.children && nodeDatum.children.length > 0 && (
                  <button onClick={toggleNode} className="collapse-btn">
                    {nodeDatum.__rd3t.collapsed ? 'Open' : 'Close'}
                  </button>
                )}
                <button onClick={handleEdit.bind(null, nodeDatum)}>Edit</button>
                <button onClick={handleAdd.bind(null, nodeDatum)}>Add</button>
              </div>
            </div>
          </foreignObject>
        </g>
      </>
    );
  }
);
