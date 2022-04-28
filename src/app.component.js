import './app.css';
import Tree from 'react-d3-tree';
import { data } from './data';

export const App = () => {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
};
