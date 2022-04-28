import React from 'react';
import { useCenteredTree } from './utils';

export const useAppProps = () => {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 150 };

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => (
    <g>
      <circle r={15}></circle>
      <foreignObject {...foreignObjectProps}>
        <div
          style={{
            width: '200px',
            border: '1px solid black',
            backgroundColor: '#dedede',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <h3 style={{ textAlign: 'center' }}>{nodeDatum.name}</h3>
          {nodeDatum.children && (
            <button style={{ width: '100%' }} onClick={toggleNode}>
              {nodeDatum.__rd3t.collapsed ? 'Open' : 'Close'}
            </button>
          )}
        </div>
      </foreignObject>
    </g>
  );

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  return {
    translate,
    containerRef,
    nodeSize,
    renderForeignObjectNode,
    foreignObjectProps,
  };
};
