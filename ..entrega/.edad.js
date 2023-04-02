d3.csv("astronautas.csv", d3.autoType).then((data) => {
  // Calculate age of each astronaut at the time of their mission
  data.forEach(d => {
    d.age_at_mission = d.anio_mision - d.anio_nacimiento;
  });

  // Sort the data by year
  data.sort((a, b) => d3.ascending(a.anio_mision, b.anio_mision));

  // Group the data by year
  let data_by_year = d3.group(data, d => d.anio_mision);

  // Calculate the median age for each year
  let median_age_by_year = new Map();
  data_by_year.forEach((group, year) => {
    median_age_by_year.set(year, d3.median(group, d => d.age_at_mission));
  });

  // Calculate the data for the median age line
  let median_age_line_data = Array.from(median_age_by_year, ([year, age]) => ({ anio_mision: year, age_at_mission: age }));

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
      Plot.line(median_age_line_data, {
        x: "anio_mision",
        y: "age_at_mission",
        stroke: "white",
        strokeWidth: 2,
        opacity: 0.8,
        //curve: d3.curveMonotoneX, // Add curve interpolator
      })
    ],  
    x: {
      line: false,
      nice: true,
      domain: [2010, 2019],
      label: "",
      tickFormat: d3.format("d"), // Set the tick label format to remove comma separator
      tickValues: d3.range(2009, 2019), // Set the tick values to an array of years
    },
    y: {
      nice: true,
      line: false,
      domain: [30, 65],
      label: "Edad",
    },
    style: {
      background: "#000124",
      padding: "10px",
      color: "white",
    },
  });

  d3.select("#chartf1").append(() => chart);
});




  /*
  Baja prioridad:
  podríamos poner un filtro de militares y civiles o de USA y RUSIA solo  
  Hay un problema muestra los numeros con una coma
  Asi hacemos que sea interactivo y que cambie la curva tmb
  
  Alta prioridad:

  titulo: Evoluciond e la edad de los astronautas en la ultima decada
  // la linea es la mediana de cada año

  Alta prioridad:
  muestra 2,010 en vez de 2010
  cheatcsheet: escalas 
  dice como configurar los numeros
  */ 

  
