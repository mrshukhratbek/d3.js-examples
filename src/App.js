import './App.css';
import Tree from 'react-d3-tree';

function App() {
  const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Project Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Frontent Lead',
            attributes: {
              department: 'Programming',
            },
            children: [
              {
                name: 'Programmer #1',
              },
              {
                name: 'Programmer #2',
              },
              {
                name: 'Programmer #3',
              },
            ],
          },
          {
            name: 'Backend Lead',
            attributes: {
              department: 'Programming',
            },
            children: [
              {
                name: 'Programmer #1',
              },
              {
                name: 'Programmer #2',
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <Tree data={orgChart} />
    </div>
  );
}

export default App;
