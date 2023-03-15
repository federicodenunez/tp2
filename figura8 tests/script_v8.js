d3.csv('astronautas.csv', d3.autoType).then(data => {
  // Sort the data array in ascending order based on mision_hs
  data.sort((a, b) => a.mision_hs - b.mision_hs);

  const colorScheme = ['#ffffff', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
                     '#000000', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'nacionalidad',
        y: 'mision_hs',
        fill: 'nacionalidad',
        color: {scheme: colorScheme},
        title: d =>  d.nombre + "\n" + d.status + "\n" + "Mision Hours: " + d.mision_hs,
      }),
    ],
    y: {
      line: true,
    },
    x: {
      line: true,
      nice: true,
    },
    color: {
      legend: true,
      nice: true,
    },
    marginLeft: 100,
    width:1150,
    height: 800,
  })
  d3.select('#chart').append(() => chart)
})
