d3.csv("astronautas.csv", d3.autoType).then((data) => {
    let chart = Plot.plot({
      marks: [Plot.dot(data, 
        { x: "anio_mision", 
        y: "anio_nacimiento" ,
      }
        )],  
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

  
