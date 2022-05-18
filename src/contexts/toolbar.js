import React from "react";

export const ToolbarContext = React.createContext();

export const ToolbarProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <ToolbarContext.Provider value={{ open, setOpen }}>
      {children}
    </ToolbarContext.Provider>
  );
};
