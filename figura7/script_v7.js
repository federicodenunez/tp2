d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'status',
        y: 'mision_hs',
        sort: "mision_hs",
        fill: 'eva_mision_hs',
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
      scheme: "magma",
    },
    marginLeft: -0.5,
    width: 600,
    height: 800,
  })
  d3.select('#chart').append(() => chart)
})