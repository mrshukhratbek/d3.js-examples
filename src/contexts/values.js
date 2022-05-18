// @react
import React from "react";

export const ValuesContext = React.createContext();

export const ValuesProvider = ({ children }) => {
  const [innitialValue, setInnitialValue] = React.useState({
    parentNode: null,
  });

  return (
    <ValuesContext.Provider value={{ innitialValue, setInnitialValue }}>
      {children}
    </ValuesContext.Provider>
  );
};
