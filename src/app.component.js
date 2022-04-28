import React from 'react';
import './app.css';
import { hoc } from './utils';
import { useAppProps } from './app.props';

export const App = hoc(useAppProps, ({ myDiv }) => {
  return <div ref={myDiv}></div>;
});
