// @react
import React from "react";
// @utils
import { useCenteredTree } from "../../hooks";

export const useTreeContainerProps = () => {
  const [setTranslate] = useCenteredTree(true);

  const containerRef = React.useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width } = containerElem.getBoundingClientRect();

      setTranslate({ x: width / 2, y: 100 });
    }
  }, []);

  return { containerRef };
};
