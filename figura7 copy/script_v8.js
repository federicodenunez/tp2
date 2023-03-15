d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'nacionalidad',
        y: 'mision_hs',
        sort: "nacionalidad",
        fill: 'nacionalidad',
        title: d => d.nacionalidad + '\n' + d.nombre + "\n" + "Mision Hours: " + d.mision_hs,
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