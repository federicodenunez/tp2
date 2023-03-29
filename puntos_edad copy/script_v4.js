d3.csv("astronautas.csv", d3.autoType).then((data) => {
  // Calculate the average age of astronauts for each year of their missions
  let avg_ages_by_year = d3.rollup(data, 
    v => d3.mean(v, d => d.anio_mision - d.anio_nacimiento), 
    d => d.anio_mision
  );

  let chart = Plot.plot({
    marks: [
      Plot.dot(data, { 
        x: "anio_mision", 
        y: "anio_nacimiento",
        fill: "white",
        stroke: "white",
        size: 20,
      }),
      Plot.line(Array.from(avg_ages_by_year, ([anio_mision, age]) => ({anio_mision, age})), {
        x: "anio_mision",
        y: "age",
        stroke: "white",
        strokeWidth: 2,
        opacity: 0.5,
      }),
    ],  
    x: {
      grid: false,
      line: true,
      zero: false,
      nice: true,
      fill: "white",
    },
    y: {
      zero: false,
      nice: true,
      line: true,
      grid: false,
      domain: [1950, 1985],
    },
    color: {
      type: "diverging",
      scheme: "BuRd",
    },
    style: {
      background: "#000124",
      padding: "10px",
      color: "white",
    },
  });

  d3.select("#chart").append(() => chart);
});






  // Podemos ver la evolucion de la edad 
  // quiza en clase podemos poner una curva que pase por la media de cada 
  // mision_año.
  /*La idea es hacer una media de edad que pase por todos los años y que sea una linea blanca
  Hay que hacer mucho enfasis en la linea
  porque los circulos no comunican nada

  Hay un problema muestra los numeros con una coma
  muestra 2,010 en vez de 2010
  */ 

  
