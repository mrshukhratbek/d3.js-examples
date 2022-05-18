import React from "react";
import { ToolbarContext } from "../contexts";

export const useToolbar = () => {
  const { open, setOpen } = React.useContext(ToolbarContext);

  return [open, setOpen];
};
