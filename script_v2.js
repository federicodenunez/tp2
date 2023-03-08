d3.csv('astronautas.csv', d3.autoType).then(data => { // levantamos el archivo data2000csv
  console.log(data) // transforma el csv en una lista de objetos. 

  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //plot.plot genera la visualización. Es un SVG 
    // svg = elemento vectorial y lo guardamos en la variable llamada chart
    marks: [ // aca elegimos la marca punto para representar cada entidad
      Plot.dot(data, { // elegimos un punto para representar cada pais
        x: 'anio_mision', // el canal es la posición en x
        //y: "cluster", // varable categórica
        y: "ocupacion",
        r: "mision_hs", 
        stroke: "mision_hs",
        opacity: 0.8,
      }),
    ],
    x: {grid: true,
      line: true,
      nice: true,
      },
    color: {
      legend: true,
      zero: true,
      nice: true,
    }
  })

  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) 
})
