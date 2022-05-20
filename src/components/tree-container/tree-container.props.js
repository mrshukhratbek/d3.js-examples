// @react
import React from 'react';
// @hooks
import { useCenteredTree, useConfigTree } from '../../hooks';

export const useTreeContainerProps = () => {
  const [setTranslate] = useCenteredTree(true);
  const [configTree, setConfigTree] = useConfigTree();

  const containerRef = React.useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setConfigTree({
        ...configTree,
        dimensions: { width, height },
      });

      setTranslate({ x: width / 2, y: 100 });
    }
  }, []);

  return { containerRef };
};
