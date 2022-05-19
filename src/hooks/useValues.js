// @react
import React from "react";
// @context
import { ValuesContext } from "../contexts";

export const useValues = () => {
  const { innitialValue, setInnitialValue } = React.useContext(ValuesContext);

  return [innitialValue, setInnitialValue];
};
