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
        y: "age_at_mission",
        fill: "white",
        stroke: "white",
        r: 1.7,
        title: d =>  d.nombre + "\n" + d.status + "\n" + "Mision Hours: " + d.mision_hs,
      }),
      Plot.line(age_line_data, {
        x: "anio_mision",
        y: "age_at_mission",
        stroke: "white",
        strokeWidth: 2,
        opacity: 0.8,
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
      domain: [30, 65],
    },
    style: {
      background: "#000124",
      padding: "10px",
      color: "white",
    },
  });

  d3.select("#chart").append(() => chart);
});


  /*
  Baja prioridad:
  podríamos poner un filtro de militares y civiles o de USA y RUSIA solo  
  Hay un problema muestra los numeros con una coma
  Asi hacemos que sea interactivo y que cambie la curva tmb
  
  Alta prioridad:
  cambiar la linea media por una mediana para que haga curvas suaves
  titulo: Evoluciond e la edad de los astronautas en la ultima decada

  Alta prioridad:
  muestra 2,010 en vez de 2010
  cheatcsheet: escalas 
  dice como configurar los numeros
  */ 

  
