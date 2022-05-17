// @react
import React from "react";
// @context
import { CentredContext } from "../contexts";

/**
 * Custom hook
 */

export const useCenteredTree = (settrOnly) => {
  const { translate, setTranslate } = React.useContext(CentredContext);

  return settrOnly ? [setTranslate] : [translate, setTranslate];
};
