import './app.css';
import React from 'react';
import { Graph } from 'react-d3-graph';
import { hoc } from './utils';
import { useAppProps } from './app.props';
import { data } from './data';

export const App = hoc(
  useAppProps,
  ({ myConfig, onClickNode, onClickLink }) => {
    return (
      <div className="app">
        <Graph
          id="graph-id" // id is mandatory
          data={data}
          config={myConfig}
          onClickNode={onClickNode}
          onClickLink={onClickLink}
        />
      </div>
    );
  }
);
