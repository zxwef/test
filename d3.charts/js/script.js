chartCircles1();

function chartCircles1() {
  const dataset = [
      [5, 20],
      [50, 35],
      [105, 76],
      [150, 81],
  ];

  const selectedObj = d3.select('#chart1');
  const svg = selectedObj.append('svg')
    .attr('width', 400)
    .attr('height', 200);

  const line = d3.line()
    .x(d => d[0])
    .y(d => d[1]);
  svg.append('path').datum(dataset)
    .attr('d', line)
    .style("fill", "none").style("stroke", '#ff6600')
    .style("stroke-width", 1);
}
