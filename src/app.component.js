import React from 'react';
import './app.css';
import Tree from 'react-d3-tree';
import { data } from './data';
import { hoc } from './utils';
import { useAppProps } from './app.props';

export const App = hoc(
  useAppProps,
  ({
    containerRef,
    translate,
    nodeSize,
    renderForeignObjectNode,
    foreignObjectProps,
  }) => {
    return (
      <div ref={containerRef}>
        <Tree
          translate={translate}
          nodeSize={nodeSize}
          data={data}
          orientation="vertical"
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
        />
      </div>
    );
  }
);
