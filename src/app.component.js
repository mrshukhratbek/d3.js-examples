import './app.css';
import React from 'react';
import Tree from 'react-d3-tree';
import { data } from './data';
import { hoc } from './utils';
import { useAppProps } from './app.props';
import { Card } from './components';

export const App = hoc(useAppProps, ({ containerRef, translate, nodeSize }) => {
  return (
    <div ref={containerRef}>
      <Tree
        data={data}
        collapsible={false}
        translate={translate}
        scaleExtent={{ min: 1, max: 3 }}
        allowForeignObjects
        pathFunc="elbow"
        orientation="vertical"
        nodeSize={nodeSize}
        nodeLabelComponent={{
          render: <Card />,
          foreignObjectWrapper: {
            style: {
              background: 'lightblue',
              border: '1px solid black',
              width: '150px',
              height: '80px',
              x: 150 / -2,
              y: 80 / -2,
            },
          },
        }}
      />
    </div>
  );
});
