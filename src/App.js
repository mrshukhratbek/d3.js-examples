import './App.css';
import Tree from 'react-d3-tree';
import { data } from './data';

function App() {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
}

export default App;
