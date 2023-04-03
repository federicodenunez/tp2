d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'status',
        y: 'mision_hs',
        sort: "mision_hs",
        fill: 'red',
        title: d => d.nacionalidad + '\n' + d.nombre + "\n" + "Mision Hours: " + d.mision_hs,
      }),
    ],
    y: {
      line: true,
      },
    x: {
      line: true,
      nice: true,
      //fill: "blue"
      label: "",
      },
    color: {
      legend: true,
      nice: true,
      //scheme: "reds", // un color
    },
    style:{
      background: "#FFD1B2",
    },
    marginLeft: -0.5,
    width: 600,
    height: 800,
    
  })
  d3.select('#chart').append(() => chart)
})