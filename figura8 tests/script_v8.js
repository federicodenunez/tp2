d3.csv('astronautas.csv', d3.autoType).then(data => {
  // group the data by category and calculate the sum of values for each category
  const groupedData = d3.rollup(
    data,
    v => d3.sum(v, d => d.mision_hs),
    d => d.category
  );
  // create a new array of objects with the data in the desired order
  const sortedData = Array.from(groupedData, ([category, value]) => ({ category, value })).sort((a, b) => d3.ascending(a.value, b.value));
  let chart = Plot.plot({
    marks: [
      Plot.barX(sortedData, {
        x: 'mision_hs',
        y: 'nacionalidad',
        //fill: 'color',
      })
    ],
    x: {
      grid: true,
      label: 'Value',
    },
    y: {
      grid: true,
      label: 'Category',
    },
    width: 800,
    height: 500,
    title: 'Horizontal Bar Chart Example',
  });
  d3.select('#chart').append(() => chart);
});
