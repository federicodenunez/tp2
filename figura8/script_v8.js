d3.csv('astronautas.csv', d3.autoType).then(data => {
  // Sort the data array in ascending order based on mision_hs
  data.sort((a, b) => a.mision_hs - b.mision_hs);

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'nacionalidad',
        y: 'mision_hs',
        fill: 'nacionalidad',
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
      scheme: "blues", // blues, inferno, magma, turbo, viridis
    },
    marginLeft: 100,
    width:1150,
    height: 800,
  })
  d3.select('#chart').append(() => chart)
})

/*Hacer una funcion que ponga a los que tienen mas horas mas al fondo*/