d3.csv("astronautas.csv", d3.autoType).then((data) => {
  // Calculate age of each astronaut at the time of their mission
  data.forEach(d => {
    d.age_at_mission = d.anio_mision - d.anio_nacimiento;
  });

  // Calculate the average age of astronauts
  let avg_age = d3.mean(data, d => d.age_at_mission);

  // Calculate the data for the age line
  let age_line_data = [
    { anio_mision: d3.min(data, d => d.anio_mision), age_at_mission: avg_age },
    { anio_mision: d3.max(data, d => d.anio_mision), age_at_mission: avg_age }
  ];

  let chart = Plot.plot({
    marks: [
      Plot.dot(data, { 
        x: "anio_mision", 
        y: "anio_nacimiento",
        fill: "white",
        stroke: "white",
      }),
      Plot.line(age_line_data, {
        x: "anio_mision",
        y: "age_at_mission",
        stroke: "white",
        strokeWidth: 2,
        strokeDasharray: "2,2"
      })
    ],  
    x: {
      line: true,
      nice: true,
      domain: [2009, 2020],
    },
    y: {
      nice: true,
      line: true,
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

  
