//  @react
import React from 'react';
// @config
import { configTree } from '../configTree';

export const ToolbarContext = React.createContext();

export const ToolbarProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [config, setConfig] = React.useState(configTree);

  return (
    <ToolbarContext.Provider value={{ open, setOpen, config, setConfig }}>
      {children}
    </ToolbarContext.Provider>
  );
};
