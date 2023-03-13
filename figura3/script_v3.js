let chart;
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    grid: true,
    nice: true,
    zero: false,
    color: {
      legend: true,
    },
    facet: {
      // esto es para datos en el eje x pero del lado de arriba
    },
    marks: [
      Plot.dot(data, { 
        // quiero hacer un año mision y mujeres
        x: "anio_mision",
        y: "nacionalidad",
        fill: "genero",
        //fillOpacity: 1,

        //title: "country",
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
});