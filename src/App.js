import './App.css';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

function App() {
  const myDiv = useRef();
  let size = 500;
  let dataset = [100, 200, 300, 400, 500];
  let rectWidth = 95;

  useEffect(() => {
    let svg = d3
      .select(myDiv.current)
      .append(`svg`)
      .attr('width', size)
      .attr('height', size);

    svg
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 5 + i * (rectWidth + 5))
      .attr('y', (d) => size - d)
      .attr('width', rectWidth)
      .attr('height', (d) => d)
      .attr('fill', 'teal');
  }, [size, rectWidth, dataset]);

  return <div ref={myDiv}></div>;
}

export default App;
