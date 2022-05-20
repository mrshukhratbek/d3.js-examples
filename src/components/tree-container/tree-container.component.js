// @react
import React from 'react';
// @utils
import { hoc } from '../../utils';
// @hook
import { useTreeContainerProps } from './tree-container.props';

export const TreeContainer = hoc(
  useTreeContainerProps,
  ({ children, containerRef }) => {
    return (
      <div ref={containerRef} className="tree-container">
        {children}
      </div>
    );
  }
);
