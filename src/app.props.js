import React from 'react';
import * as d3 from 'd3';

export const useAppProps = () => {
  const myDiv = React.useRef();
  let size = 500;
  let dataset = React.useMemo(() => [100, 200, 300, 400, 500], []);
  let rectWidth = 95;

  React.useEffect(() => {
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

  return {
    myDiv,
  };
};
