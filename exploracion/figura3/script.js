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
        x: "anio_nacimiento",
        y: "nacionalidad",
        fill: "genero",
        r: "mision_hs",
        fillOpacity: 0.5,
        title: d => d.nombre + "\n" + d.status,
      }),
    ],
    color: {
      range: ["red", "blue"],},
  });
  d3.select("#chart").append(() => chart);
});