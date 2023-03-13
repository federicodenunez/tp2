d3.csv("astronautas.csv", d3.autoType).then((data) => {
    let chart = Plot.plot({
      marks: [Plot.dot(data, { x: "anio_mision", y: "anio_nacimiento" })],
      x: {
        grid: false,
        line: true,
        zero: false,
        nice: true,
      },
      y: {
        zero: false,
        nice: true,
        line: true,
        grid: false,
      },
    });
    d3.select("#chart").append(() => chart);
  });
  // Podemos ver la evolucion de la edad 
  // quiza en clase podemos poner una curva que pase por la media de cada 
  // mision_año.

  
