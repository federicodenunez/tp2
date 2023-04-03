d3.csv('astronautas.csv', d3.autoType).then(data => {
  // Sort the data array in ascending order based on mision_hs
  data.sort((a, b) => a.mision_hs - b.mision_hs);
  let dataNA = data.filter( d => d.nacionalidad ===  "China" || d.nacionalidad ===  "Paises Bajos" || 
  d.nacionalidad ===  "Reino Unido" || d.nacionalidad ===  "Alemania" || d.nacionalidad ===  "Francia" || 
  d.nacionalidad ===  "Italia" || d.nacionalidad ===  "Japon" || d.nacionalidad ===  "EE.UU." || d.nacionalidad ===  "U.S.S.R/Rusia")
  createChart(dataNA)
  });

  function createChart(data){
    let chart = Plot.plot({
      marks: [
        Plot.barX(data, {
          x: 'mision_hs',
          y: 'nacionalidad',
          fill: d => (d.nacionalidad == "EE.UU." || d.nacionalidad == "U.S.S.R/Rusia" ? "#6BFEFF" : "white"), // #DBECF3
          title: d =>  d.nombre + "\n" + d.status + "\n" + "Mision Hours: " + d.mision_hs, 
          order: (a, b) => d3.descending(a.mision_hs, b.mision_hs),
          sort: {y: "x", reverse: true},
        }),
      ],
      y: {
        line: true,
        sort: true,
        nice: true,
        label: "",
      },
      x: {
        line: true,
        nice: true,
        label: "Horas de misión",
        // centrar el label
        // cambiar el domain para añadir mas valores en el eje x
      },
      color: {
        legend: true,
        nice: true,
      },
      marginLeft: 100,
      width:500,
      height: 400,
      style: {
        background: "#000124",
        padding: "0px",
      color: "white",
      }
    })
    d3.select('#chart2').append(() => chart)
  }

  // Titulo: diferencia entre estados unidos y rusia con el resto del mundo