// @react
import React from 'react';
// @context
import { ToolbarContext } from '../contexts';

export const useConfigTree = () => {
  const { config, setConfig } = React.useContext(ToolbarContext);

  return [config, setConfig];
};
