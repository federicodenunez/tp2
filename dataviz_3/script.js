d3.csv("astronautas.csv", d3.autoType).then((data) => {
  // Calcula la edad de cada astronauta en el año que estuvieron en mision
  data.forEach(d => {
    d.age_at_mission = d.anio_mision - d.anio_nacimiento;
  });

  // Agrupo los datos por año
  data.sort((a, b) => d3.ascending(a.anio_mision, b.anio_mision));
  let data_by_year = d3.group(data, d => d.anio_mision);

  // Calculao la mediana de edad de cada año
  let median_age_by_year = new Map();
  data_by_year.forEach((group, year) => {
    median_age_by_year.set(year, d3.median(group, d => d.age_at_mission));
  });

  // Calculo la data que le voy a pasar al lineplot
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
        
      })
    ],  
    x: {
      line: false,
      nice: true,
      domain: [2010, 2019],
      label: "",
      tickFormat: d3.format("d"), 
      tickValues: d3.range(2009, 2019), 
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

  d3.select("#chart1").append(() => chart);
});



  
