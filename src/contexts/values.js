// @react
import React, { useEffect } from 'react';
// @data
import { customdata } from '../data';
// @utils
import { createArray } from '../utils';
// @config
import { configTree } from '../configTree';

export const ValuesContext = React.createContext();

export const ValuesProvider = ({ children }) => {
  const [data, setData] = React.useState(customdata);
  const createdArray = [...createArray(data)];

  const [innitialValue, setInnitialValue] = React.useState({
    data,
    setData,
    parentNode: null,
    nodeArr: [...new Set([...createdArray])],
    configTree,
  });

  useEffect(() => {
    setInnitialValue({
      ...innitialValue,
      data,
      nodeArr: [...new Set(createdArray)],
    });
  }, [data]);

  return (
    <ValuesContext.Provider value={{ innitialValue, setInnitialValue }}>
      {children}
    </ValuesContext.Provider>
  );
};
