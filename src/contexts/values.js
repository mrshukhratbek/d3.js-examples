// @react
import React, { useEffect } from "react";
// @data
import { data as fakeData } from "../data";

export const ValuesContext = React.createContext();

export const ValuesProvider = ({ children }) => {
  const [data, setData] = React.useState(fakeData);

  const [innitialValue, setInnitialValue] = React.useState({
    data,
    setData,
    parentNode: null,
  });

  useEffect(() => {
    setInnitialValue({ ...innitialValue, data });
  }, [data]);

  return (
    <ValuesContext.Provider value={{ innitialValue, setInnitialValue }}>
      {children}
    </ValuesContext.Provider>
  );
};
