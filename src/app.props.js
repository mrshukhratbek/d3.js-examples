import React from 'react';
import { useCenteredTree } from './utils';

export const useAppProps = () => {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 150 };

  return {
    translate,
    containerRef,
    nodeSize,
  };
};
