// @react
import React from "react";

export const CentredContext = React.createContext();

export const CentredProvider = ({ children }) => {
  const [translate, setTranslate] = React.useState({ x: 0, y: 100 });

  return (
    <CentredContext.Provider value={{ translate, setTranslate }}>
      {children}
    </CentredContext.Provider>
  );
};
